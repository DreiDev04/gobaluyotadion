import { Button } from "@/components/ui/button";
import Link from "next/link";

const Question = () => {
  return (
    <section className="container mx-auto max-w-5xl px-4">
      <div className="relative w-full">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="absolute top-1/2 left-0 w-3/4 h-3/4 bg-primary/40 rounded-full transform -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-3/4 h-3/4 bg-secondary/40 rounded-full transform -translate-y-1/2" />
        </div>

        {/* Content */}
        <div className="relative w-full backdrop-blur-xl bg-background/10 p-12 sm:p-16 flex flex-col items-center justify-center text-center rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Have legal questions?{" "}
              <span className="block mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                Ask our experts!
              </span>
            </h3>
            <p className="text-white/90 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Our experienced team is ready to help you navigate your legal challenges with personalized solutions tailored to your needs.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/contact" className="group">
              <Button 
                variant={"secondary"}
                size="lg" 
                className="rounded-full px-8 "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Consultation
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Button>
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Question;
