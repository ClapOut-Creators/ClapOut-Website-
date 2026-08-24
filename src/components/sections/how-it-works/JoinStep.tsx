import { Rocket } from 'lucide-react';
import StepHeader from './StepHeader';
import CampaignCard from '../../ui/CampaignCard';
import { campaigns } from '../../../data/campaigns';
import { steps } from '../../../data/steps';

export default function JoinStep() {
  const step = steps[0];

  return (
    <div>
      <StepHeader icon={Rocket} number={step.number} eyebrow={step.eyebrow} heading={step.heading} body={step.body} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:pl-16">
        {campaigns
          .filter((campaign) => campaign.demo && campaign.slug !== 'klap-viral-clipping')
          .map((campaign) => (
            <CampaignCard key={campaign.slug} campaign={campaign} interactive={false} />
          ))}
      </div>
    </div>
  );
}
