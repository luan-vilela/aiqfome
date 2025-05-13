import { TicketSummary } from '../components/ticket-summary/ticketSummary';

const TicketPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <TicketSummary restaurantId={id} />;
};

export default TicketPage;
