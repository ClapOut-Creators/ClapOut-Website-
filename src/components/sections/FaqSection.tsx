import Accordion from '../ui/Accordion';
import { faqs } from '../../data/faqs';

export default function FaqSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-16">
          <div>
            <p className="font-sfpro text-sm uppercase tracking-wide text-text-body">Questions</p>
            <h2 className="mt-4 font-poppins text-4xl font-semibold text-black/80 md:text-5xl">FAQs</h2>
          </div>

          <div>
            {faqs.map((faq) => (
              <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
