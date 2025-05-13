import { TicketSummary } from '../components/ticket-summary/ticketSummary';

const TicketPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const { id } = params;

  return <TicketSummary restaurantId={id} />;
};

export default TicketPage;
