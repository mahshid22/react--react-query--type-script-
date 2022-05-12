import { useQuery } from "react-query";
import axios from "axios";
import { locationType } from "../types/location";

const getLocation = async (locationId: number | null) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}location/${locationId}`
  );
  return data;
};

export default function useEpisode(locationId: number | null) {
  return useQuery<locationType, Error>(
    `location-${locationId}`,
    () => getLocation(locationId),
    {
      enabled: !!locationId,
    }
  );
}
