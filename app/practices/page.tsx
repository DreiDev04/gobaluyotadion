import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import practiceAreas from "@/data/practices.json";

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Hero Section - Apple Style */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-light tracking-tight sm:text-6xl ">
            <span className="block text-primary">Our Legal</span>
            <span className="block font-medium text-secondary">
              Practice Areas
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl font-light">
            Delivering exceptional legal services with precision, integrity, and
            innovative thinking.
          </p>
          <Separator className="mt-8 mx-auto w-16 h-4 " />
        </div>

        {/* Practice Areas Grid - Apple Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <Card key={area.title} className="group rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl  p-3  rounded-xl transition-colors duration-300 bg-gray-200">
                    {area.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-medium tracking-tight">
                      {area.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 leading-relaxed ">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.expertise.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
