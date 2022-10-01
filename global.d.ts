interface spread {
  name: string;
  guide: string;
  description: string;
  link: string;
}

interface SpreadClass {
  type: string;
  spreads: spread[];
}

type cardSize = "small" | "medium" | "large" | "xlarge" | "tiny";