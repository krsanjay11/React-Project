import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["Booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // by default react query will try data 3 times if it fails
  });

  return { isLoading, error, booking };
}
