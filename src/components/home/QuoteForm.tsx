import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface QuoteFormProps {
  inputClassName?: string;
  buttonText?: string;
  buttonClassName?: string;
  showMessage?: boolean;
  showAddress?: boolean;
}

export const QuoteForm = ({
  inputClassName = "h-12 border-white bg-white/10 text-white placeholder:text-white/70 focus:border-white focus:ring-white/30",
  buttonText = "Get a Quote",
  buttonClassName = "mx-auto h-12 w-full shrink-0 bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto sm:px-12",
  showMessage = true,
  showAddress = false,
}: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name and Email Row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={inputClassName}
          required
          aria-label="Full Name"
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={inputClassName}
          required
          aria-label="Email Address"
        />
      </div>

      {/* Phone and Address Row */}
      {showAddress ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={inputClassName}
            aria-label="Phone Number"
          />
          <Input
            type="text"
            placeholder="Property Address (Suburb, Brisbane)"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className={inputClassName}
            aria-label="Property Address"
          />
        </div>
      ) : (
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className={inputClassName}
          aria-label="Phone Number"
        />
      )}

      {/* Message Field */}
      {showMessage && (
        <Textarea
          placeholder="Tell us about your roof painting needs..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`${inputClassName} min-h-[100px] resize-none`}
          rows={4}
          aria-label="Message"
        />
      )}

      <Button type="submit" size="lg" className={buttonClassName}>
        {buttonText}
      </Button>
    </form>
  );
};
