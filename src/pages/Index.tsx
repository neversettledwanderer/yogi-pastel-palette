import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, MapPin, Coffee } from "lucide-react";

const Index = () => {
  const funFacts = [
    {
      title: "Knowledge Seeker",
      description: "I read industry reports and case studies to stay ahead in project trends.",
      icon: BookOpen,
      bgColor: "bg-accent/20",
      iconBg: "bg-accent"
    },
    {
      title: "Home Coffee Tinkerer",
      description: "Experimenting with brewing techniques and discovering new coffee flavors from around the world.",
      icon: Coffee,
      bgColor: "bg-primary/10",
      iconBg: "bg-primary"
    },
    {
      title: "Travel + Street Photography",
      description: "Capturing authentic moments and stories through my lens during travels and daily explorations.",
      icon: MapPin,
      bgColor: "bg-secondary/20",
      iconBg: "bg-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10">
      {/* Header */}
      <header className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Yogesh Mistry
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Project Manager — Stakeholder Solutions & Customer Engagement
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button variant="default" className="rounded-full px-6">
                Get In Touch
              </Button>
              <Button variant="outline" className="rounded-full px-6">
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-muted-foreground">
                YM
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="container mx-auto px-6 py-16">
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center mb-4">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I'm a passionate project manager with over a decade of experience in driving successful 
              stakeholder solutions and enhancing customer engagement strategies. My expertise lies in 
              bridging the gap between technical teams and business objectives, ensuring projects deliver 
              real value to end users. I thrive in collaborative environments where clear communication 
              and strategic thinking lead to exceptional outcomes.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Fun Facts Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {funFacts.map((fact, index) => (
            <Card
              key={index}
              className={`${fact.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${fact.iconBg} mx-auto mb-4 flex items-center justify-center`}>
                  <fact.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {fact.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-primary/5 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 text-lg"
              asChild
            >
              <a href="mailto:yogesh.mistry@email.com">
                yogesh.mistry@email.com
              </a>
            </Button>
            <Button
              variant="default"
              className="rounded-full px-8 py-3 text-lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/yogeshmistry1981" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;