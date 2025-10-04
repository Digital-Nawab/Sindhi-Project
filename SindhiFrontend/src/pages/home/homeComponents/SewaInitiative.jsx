import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

function SewaInitiative() {
  const [formType, setFormType] = useState("Volunteer");

  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Join Our <span className="text-red-600">SEWA Initiatives</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Every contribution matters. Be part of our mission to serve humanity
          and preserve our heritage.
        </p>

        {/* Buttons with Popup */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          {/* Volunteer */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={() => setFormType("Volunteer")}
                className="bg-[#E82600] text-white font-semibold px-24 py-3 rounded-md hover:bg-red-700 transition"
              >
                Volunteer with us
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>
                  {formType} Form
                </DialogTitle>
              </DialogHeader>
              <form className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input className="mt-2" id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input className="mt-2" id="address" placeholder="Enter your address" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input className="mt-2" id="city" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input className="mt-2" id="state" placeholder="State" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact">Contact</Label>
                  <Input className="mt-2" id="contact" placeholder="Phone / Email" />
                </div>

                <div>
                  <Label>Interested in:</Label>
                  <RadioGroup defaultValue={formType}>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="Volunteer" id="volunteer" />
                      <Label htmlFor="volunteer">Being a Volunteer</Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="Donation" id="donation" />
                      <Label htmlFor="donation">Donating</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full bg-[#E82600] text-white">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Donate */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={() => setFormType("Donation")}
                className="border border-[#E82600] text-[#E82600] font-semibold px-24 py-3 rounded-md hover:bg-[#E82600] hover:text-white transition"
              >
                Donate to SEWA
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>
                  {formType} Form
                </DialogTitle>
              </DialogHeader>
              <form className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input className="mt-2" id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input className="mt-2" id="address" placeholder="Enter your address" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input className="mt-2" id="city" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input className="mt-2" id="state" placeholder="State" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact">Contact</Label>
                  <Input className="mt-2" id="contact" placeholder="Phone / Email" />
                </div>

                <div>
                  <Label>Interested in:</Label>
                  <RadioGroup defaultValue={formType}>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="Volunteer" id="volunteer2" />
                      <Label htmlFor="volunteer2">Being a Volunteer</Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="Donation" id="donation2" />
                      <Label htmlFor="donation2">Donating</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full bg-[#E82600] text-white">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

export default SewaInitiative;
