export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tennis Score Counter",
    techs: ["swiftui", "watchos", "health kit"],
    link: "https://github.com/josetorronteras/",
    isComingSoon: true,
  },
  {
    title: "Music genre classification",
    techs: ["python", "deep learning", "keras"],
    link: "https://github.com/josetorronteras/Music-Genre-Classification",
  },
  {
    title: "CIFAR10 vision classifier",
    techs: ["swift", "python", "mlmodel", "vision"],
    link: "https://github.com/josetorronteras/CIFAR10VisionClassifier",
  },
  {
    title: "Monkey species classification",
    techs: ["python", "deep learning", "keras"],
    link: "https://github.com/josetorronteras/Monkey-Species-Classification",
  },
  {
    title: "WeatherApp",
    techs: ["swift", "ios", "mvvm"],
    link: "https://github.com/josetorronteras/WeatherApp",
  },
];
