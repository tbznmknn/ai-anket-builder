"use client";

import usePremiumModal from "@/hooks/usePremiumModal";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const premiumFeatures = ["AI сайжруулсан хэрэглүүрүүд", "3 хүртэлх анкет"];
const premiumPlusFeatures = ["Хязгааргүй анкетүүд", "Бүрэн өөрчлөх боломж"];

export default function PremiumModal() {
  const { open, setOpen } = usePremiumModal();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>AI Анкет бүтээгч VIP</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p>Илүү сайн анкет бүтээхийн тулд VIP эрхтэй аваарай</p>
          <div className="flex">
            <div className="flex w-1/2 flex-col space-y-5">
              <h3 className="text-center text-lg font-bold">VIP</h3>
              <ul className="list-inside space-y-2">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button>VIP эрх авах</Button>
            </div>
            <div className="mx-6 border-l" />
            <div className="flex w-1/2 flex-col space-y-5">
              <h3 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-lg font-bold text-transparent">
                Дээд зэрэглэлийн VIP
              </h3>
              <ul className="list-inside space-y-2">
                {premiumPlusFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="premium">Дээд Зэрэглэлийн VIP эрх авах</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
