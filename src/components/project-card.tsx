import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  className?: string;
  award?: string;
}

export function ProjectCard({ title, description, tags, link, className, award }: Props) {
  return (
    <Card className={`flex flex-col overflow-hidden border border-muted p-3 ${className || ''}`}>
      <CardHeader className="">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-sm">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {title}{" "}
                  <span className="size-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            {award && (
              <div className="rounded border px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground whitespace-nowrap">
                {award}
              </div>
            )}
          </div>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge className="px-1 py-0 text-[10px]" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
