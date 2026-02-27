'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogPortal,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ReCaptchaDialog } from './ReCaptchaDialog';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Loader2, Calendar, Clock, ChevronLeft, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
// Using sylvia logo from public folder or import if available. using public path for simplicity
// or reused import if we knew it. Let's use the one we set up.
import sylviaLogo from '@/media/sylvia.logo.png';

interface DialogProps {
  triggerButtonText: string;
  dialogTitle?: string;
  dialogDescription?: string;
  inputLabels?: { name: string; email: string; message: string };
  buttonClassName?: string;
  inputClassName?: string;
}

type Step = 'duration' | 'datetime' | 'details';

export function DialogComponent({
  triggerButtonText,
  buttonClassName = '',
  inputClassName = '',
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('duration');

  // Meeting State
  const [duration, setDuration] = useState<15 | 30>(15);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Form State
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Reset state when dialog closes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setStep('duration');
        setDuration(15);
        setSelectedDate('');
        setSelectedTime('');
        setInput({ name: '', email: '', message: '' });
      }, 300);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!input.name.trim()) return 'Name is required';
    if (!input.email.trim()) return 'Email is required';
    if (!input.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Invalid email format';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    setIsLoading(true);

    try {
      // Construct the message with meeting details
      const meetingDetails = `
MEETING REQUEST:
----------------
Duration: ${duration} Minutes
Date: ${selectedDate}
Time: ${selectedTime}

ADDITIONAL NOTES:
${input.message || 'No additional notes provided.'}
      `.trim();

      // Check if critical configuration is missing
      if (!serviceID || !templateID || !publicKey) {
        console.warn('EmailJS configuration missing. Simulating success for development/demo.');
        console.log({
          to_name: 'Sylvia Barick',
          from_name: input.name,
          email: input.email,
          message: meetingDetails,
        });

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success(`(DEMO) Meeting request sent to ${input.email}`);
        handleOpenChange(false);
        return; // Exit early since we simulated success
      }

      const emailRes = await emailjs.send(
        serviceID,
        templateID,
        {
          to_name: 'Sylvia Barick',
          from_name: input.name,
          email: input.email,
          message: meetingDetails,
        },
        publicKey,
      );

      if (emailRes.status === 200) {
        toast.success(`Meeting request sent! Confirmation sent to ${input.email}`);
        handleOpenChange(false);
      }
    } catch (err: unknown) {
      const errorMessage =
        (err as { text?: string; message?: string })?.text ||
        (err as Error).message ||
        'Failed to request meeting';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate some time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00'
  ];

  return (
    <>
      <ReCaptchaDialog
        triggerButtonText={triggerButtonText}
        buttonClassName={buttonClassName}
        onVerified={() => setIsOpen(true)}
      />

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogPortal>
          <div className="fixed inset-0 bg-black/50 dialog-overlay z-40 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogContent className="w-full max-w-4xl p-0 gap-0 rounded-xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[600px]">

                {/* Left Sidebar - Summary */}
                <div className="md:w-1/3 bg-gray-50 border-r border-gray-100 p-6 flex flex-col items-center md:items-start">
                  {/* Profile Header */}
                  <div className="flex flex-col items-center md:items-start w-full mb-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                      <Image src={sylviaLogo} alt="Sylvia Barick" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Sylvia Barick</h3>
                    <p className="text-sm text-gray-500">AI-ML Engineer | Developer</p>
                  </div>

                  {/* Meeting Summary (Visible on all steps) */}
                  <div className="w-full space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{duration} Min Meeting</span>
                    </div>

                    {selectedDate && (
                      <div className="flex items-center text-gray-600 animate-in fade-in slide-in-from-left-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(selectedDate).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                      </div>
                    )}

                    {selectedTime && (
                      <div className="flex items-center text-gray-800 font-semibold animate-in fade-in slide-in-from-left-2">
                        <div className="w-4 h-4 mr-2" /> {/* Spacer */}
                        <span>{selectedTime}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto hidden md:block text-xs text-gray-400">
                    Timezone: Asia/Calcutta
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col h-full overflow-y-auto">

                  {/* Header with Back Button */}
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                      {step === 'duration' && 'Select Duration'}
                      {step === 'datetime' && 'Select Date & Time'}
                      {step === 'details' && 'Enter Details'}
                    </h2>
                    {step !== 'duration' && (
                      <Button
                        variant="neutral"
                        size="sm"
                        onClick={() => setStep(prev => prev === 'details' ? 'datetime' : 'duration')}
                        className="text-gray-500"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back
                      </Button>
                    )}
                  </div>

                  {/* Step 1: Duration Selection */}
                  {step === 'duration' && (
                    <div className="grid grid-cols-1 gap-4 animate-in fade-in zoom-in-95 duration-300">
                      <button
                        onClick={() => { setDuration(15); setStep('datetime'); }}
                        className="flex justify-between items-center p-4 border rounded-lg hover:border-black hover:shadow-md transition-all group"
                      >
                        <div className="text-left">
                          <h4 className="font-semibold text-lg group-hover:text-blue-600">15 Min Meeting</h4>
                          <p className="text-sm text-gray-500">Quick chat or introduction.</p>
                        </div>
                        <ChevronLeft className="w-5 h-5 rotate-180 text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                      </button>

                      <button
                        onClick={() => { setDuration(30); setStep('datetime'); }}
                        className="flex justify-between items-center p-4 border rounded-lg hover:border-black hover:shadow-md transition-all group"
                      >
                        <div className="text-left">
                          <h4 className="font-semibold text-lg group-hover:text-blue-600">30 Min Meeting</h4>
                          <p className="text-sm text-gray-500">In-depth discussion or project review.</p>
                        </div>
                        <ChevronLeft className="w-5 h-5 rotate-180 text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Date & Time Selection */}
                  {step === 'datetime' && (
                    <div className="flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-300">
                      <div className="space-y-2">
                        <Label className="text-base">Select Date</Label>
                        <Input
                          type="date"
                          className="w-full text-lg p-3 h-12"
                          min={new Date().toISOString().split('T')[0]}
                          value={selectedDate}
                          onChange={(e) => {
                            setSelectedDate(e.target.value);
                            setSelectedTime(''); // Reset time when date changes
                          }}
                        />
                      </div>

                      {selectedDate && (
                        <div className="space-y-2">
                          <Label className="text-base">Select Time</Label>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={cn(
                                  "py-2 px-1 rounded-md text-sm border transition-all",
                                  selectedTime === time
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-700 border-gray-200 hover:border-black"
                                )}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-auto pt-4 flex justify-end">
                        <Button
                          disabled={!selectedDate || !selectedTime}
                          onClick={() => setStep('details')}
                          className="bg-black text-white hover:bg-gray-800"
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Details Form */}
                  {step === 'details' && (
                    <form onSubmit={handleSubmit} className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
                      <div className="space-y-4 flex-1">
                        <div>
                          <Label htmlFor="name" className={inputClassName}>Your Name *</Label>
                          <div className="relative mt-1">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="name"
                              name="name"
                              value={input.name}
                              onChange={handleInputChange}
                              className={`pl-10 ${inputClassName}`}
                              placeholder="John Doe"
                              disabled={isLoading}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email" className={inputClassName}>Email Address *</Label>
                          <div className="relative mt-1">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={input.email}
                              onChange={handleInputChange}
                              className={`pl-10 ${inputClassName}`}
                              placeholder="john@example.com"
                              disabled={isLoading}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message" className={inputClassName}>Additional Notes</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={input.message}
                            onChange={handleInputChange}
                            className={`mt-1 min-h-[100px] ${inputClassName}`}
                            placeholder="Please share anything that will help prepare for our meeting."
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <DialogFooter className="mt-6">
                        <Button
                          type="submit"
                          disabled={isLoading || !input.name || !input.email}
                          className="w-full h-12 text-lg bg-black text-white hover:bg-gray-800"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Scheduling...
                            </>
                          ) : (
                            'Confirm Meeting'
                          )}
                        </Button>
                      </DialogFooter>
                    </form>
                  )}

                </div>
              </DialogContent>
            </div>
          </div>
        </DialogPortal>
      </Dialog>
    </>
  );
}
