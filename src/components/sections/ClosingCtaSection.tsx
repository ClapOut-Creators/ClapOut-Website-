import Button from '../ui/Button';

export default function ClosingCtaSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          className="font-poppins font-medium"
          style={{ fontSize: 'clamp(2rem, 1.2rem + 3vw, 3.5rem)', lineHeight: 1.15 }}
        >
          <span className="text-black/40">Two sides. </span>
          <span className="font-bold text-black/80">One Place.</span>
          <br />
          <span className="text-black/40">Pick yours</span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg font-sfpro text-text-body">
          Clippers get paid per view. Brands get reach they only pay for when it is verified.
        </p>

        <div className="mx-auto mt-8 flex max-w-xs flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Button variant="orange" className="w-full px-[34px] py-3 sm:w-auto">
            Start Clipping
          </Button>
          <Button variant="gray" className="w-full px-[34px] py-3 sm:w-auto">
            Start Campaign
          </Button>
        </div>
      </div>
    </section>
  );
}
