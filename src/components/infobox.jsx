import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Droplet, Mountain } from "lucide-react";

const InfoBox = ({ isWater, lat, lng }) => {
  return (
    <Card className="fixed bottom-4 left-4 w-72 bg-white/80 backdrop-blur-sm shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Location Info
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-1 flex items-center">
          <span className="w-24">Latitude:</span>
          <span className="font-medium">{lat.toFixed(6)}</span>
        </p>
        <p className="text-sm mb-1 flex items-center">
          <span className="w-24">Longitude:</span>
          <span className="font-medium">{lng.toFixed(6)}</span>
        </p>
        <p className="text-sm font-semibold flex items-center">
          <span className="w-24">Type:</span>
          {isWater ? (
            <span className="flex items-center text-blue-600">
              <Droplet className="w-4 h-4 mr-1" />
              Water
            </span>
          ) : (
            <span className="flex items-center text-green-600">
              <Mountain className="w-4 h-4 mr-1" />
              Land
            </span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

export default InfoBox;