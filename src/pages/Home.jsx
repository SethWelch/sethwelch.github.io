import { Box, Button, Chip, Container, IconButton, Link, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Title from "../components/Title";
import IconContainer from "../components/IconContainer";

import CssIcon from "../assets/icons/css3-plain.svg";
import JavascriptIcon from "../assets/icons/javascript-plain.svg";
import MaterialUiIcon from "../assets/icons/materialui-plain.svg";
import NodeJsIcon from "../assets/icons/nodejs-plain.svg";
import PostgresIcon from "../assets/icons/postgresql-plain.svg";
import ReactIcon from "../assets/icons/react-original.svg";
import FigmaOriginal from "../assets/icons/figma-original.svg";
import GitIcon from "../assets/icons/git-plain.svg";
import BootstrapIcon from "../assets/icons/bootstrap-plain.svg";
import DockerIcon from "../assets/icons/docker-plain.svg";
import JavaIcon from "../assets/icons/java-plain.svg";
import KotlinIcon from "../assets/icons/kotlin-plain.svg";
import MysqlIcon from "../assets/icons/mysql-plain.svg";
import ReduxIcon from "../assets/icons/redux-original.svg";
import SequelizeIcon from "../assets/icons/sequelize-plain.svg";
import TypescriptIcon from "../assets/icons/typescript-plain.svg";
import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

import PortfolioImage from "../assets/images/PortfolioPage.png";
import PortraitImage from "../assets/images/Portrait.jpg";
import SnakeImage from "../assets/images/Snake.png";
import WindowsImage from "../assets/images/Windows98.png";
import Image2048 from "../assets/images/2048.png";

const projects = [
  {
    title: "React Portfolio",
    body: "The portfolio site you're looking at right now.",
    chips: ["React", "MUI", "Vite"],
    website: "https://www.sethwelch.com",
    github: "https://github.com/SethWelch/sethwelch.github.io",
    image: PortfolioImage,
  },
  {
    title: "React Snake",
    body: "A snake game built with React for my kids.",
    chips: ["React", "CSS", "Javascript"],
    website: "https://www.svoze.com",
    github: "https://github.com/SethWelch/Snake",
    image: SnakeImage,
  },
  {
    title: "Windows 98",
    body: "A Windows 98 UI clone built for fun.",
    chips: ["React", "CSS", "Typescript"],
    website: "https://windows1998.vercel.app",
    github: "https://github.com/SethWelch/Windows98",
    image: WindowsImage,
  },
  {
    title: "2048",
    body: "Recreating the classic 2048 puzzle game.",
    chips: ["React", "Typescript", "Vite"],
    website: "https://www.sethwelch.com/2048",
    github: "https://github.com/SethWelch/2048",
    image: Image2048,
  },
];

const experience = [
  {
    title: "Founding Engineer",
    company: "Ascension",
    period: "Jan 2025 – Present",
    duration: "1 yr 3 mos",
    categories: [
      {
        name: "Engineering",
        bullets: [
          "Designed and built the full application stack from scratch including a React and Tailwind frontend, Node.js and TypeORM backend, and PostgreSQL database.",
          "Engineered complex domain-specific calculation engines requiring high accuracy and reliability across multiple interdependent variables.",
          "Built and maintained multiple customer-facing product surfaces including authenticated application experiences and public-facing tools.",
        ],
      },
      {
        name: "Security & Compliance",
        bullets: [
          "Established and maintain the company's security and compliance program including vulnerability management, penetration testing, vendor risk assessments, and Vanta compliance monitoring.",
          "Implemented end-to-end security architecture including encryption at rest and in transit, MFA enforcement, Redis-backed session management, and role-based access control.",
        ],
      },
      {
        name: "Leadership & Operations",
        bullets: [
          "Assisted with the full engineering hiring pipeline including sourcing, technical interviews, and background verification.",
          "Led daily engineering standups, driving task prioritization and cross-functional communication across the engineering team using a Kanban workflow.",
          "Onboarding and mentoring incoming senior engineering talent, establishing technical context and development workflows.",
        ],
      },
    ],
  },
  {
    title: "Engineering Team Lead",
    company: "Themis",
    period: "Jan 2024 – Dec 2024",
    duration: "1 yr",
    categories: [
      {
        name: "Engineering",
        bullets: [
          "Led a ground-up rewrite of the frontend application, replacing a monolithic, inconsistent codebase with a modern component-based architecture built on React and Tailwind.",
          "Established the company's design system and component library, bringing visual consistency and reusable patterns across the entire product surface.",
          "Drove meaningful performance improvements through architectural changes and adherence to frontend best practices.",
        ],
      },
      {
        name: "Leadership & Operations",
        bullets: [
          "Led daily engineering standups and owned sprint-level task prioritization and team coordination.",
          "Served as the primary liaison between engineering, product, and design, ensuring alignment across disciplines on priorities and delivery.",
          "Conducted biweekly one-on-ones with direct reports, supporting individual growth and maintaining team health.",
        ],
      },
    ],
  },
  {
    title: "Founding Engineer",
    company: "Stage",
    period: "Jan 2022 – Dec 2023",
    duration: "2 yrs",
    location: "Hayden, Idaho · Remote",
    categories: [
      {
        name: "Engineering",
        bullets: [
          "Founding engineer on a SaaS platform enabling business users to control and monetize features within their own sites with minimal configuration — successfully shipped to two paying customers before the company wound down.",
          "One of five engineers on a small team working directly alongside two C-level founders, with high individual ownership across the entire product.",
          "Owned the full stack from day one — building the React frontend, Kotlin backend, and database layer including schema design and migrations.",
          "Participated in core architectural decisions, helping shape the technical foundation of the product from the ground up.",
          "Collaborated closely with the designer to deliver an intuitive experience tailored to non-technical business users.",
        ],
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "SoFi",
    period: "Oct 2019 – Jan 2022",
    duration: "2 yrs 4 mos",
    categories: [
      {
        name: "Engineering",
        bullets: [
          "Built internal tooling and developer productivity software to support other engineering teams.",
          "Worked across a full stack including Node.js, React, Redux, Postgres, Kubernetes, and ActiveMQ.",
        ],
      },
      {
        name: "Leadership & Mentorship",
        bullets: [
          "Mentored junior engineers on the team, providing technical guidance and code reviews.",
          "Participated in the engineering interview process, evaluating candidates across technical disciplines.",
        ],
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "SoFi",
    period: "May 2015 – Oct 2019",
    duration: "4 yrs 6 mos",
    categories: [
      {
        name: "Engineering",
        bullets: [
          "Built internal software tools to support engineering teams, working primarily with Node.js, React, Redux, Postgres, Kubernetes, and ActiveMQ.",
          "Collaborated with the Communications team on projects including a Live Chat solution and Kafka integration, working across Java, Spring Boot, PHP, Apache, and MySQL.",
        ],
      },
      {
        name: "Training & Mentorship",
        bullets: [
          "Served concurrently as Technical Trainer (Sep 2017 – Oct 2018), creating and delivering onboarding curriculum for new engineering hires.",
          "Expanded first-week training to cover Kafka, logging, SBT, Gradle, coding standards, Git, and more.",
          "Developed a second-week full-stack training program giving new engineers hands-on exposure to the company stack.",
          "Organized company-wide knowledge sharing sessions and sourced secure programming training programs for the broader engineering org.",
        ],
      },
    ],
  },
];

const skills = [
  { text: "React", icon: ReactIcon },
  { text: "Javascript", icon: JavascriptIcon },
  { text: "Typescript", icon: TypescriptIcon },
  { text: "Node", icon: NodeJsIcon },
  { text: "CSS", icon: CssIcon },
  { text: "Postgres", icon: PostgresIcon },
  { text: "Material UI", icon: MaterialUiIcon },
  { text: "Redux", icon: ReduxIcon },
  { text: "Figma", icon: FigmaOriginal },
  { text: "Docker", icon: DockerIcon },
  { text: "Git", icon: GitIcon },
  { text: "Bootstrap", icon: BootstrapIcon },
  { text: "MySQL", icon: MysqlIcon },
  { text: "Sequelize", icon: SequelizeIcon },
  { text: "Kotlin", icon: KotlinIcon },
  { text: "Java", icon: JavaIcon },
];

function ProjectCard({ title, body, chips, website, github, image }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.2)}`,
        },
      }}
    >
      <Box sx={{ overflow: "hidden", height: 180 }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.75, color: theme.palette.text.primary }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: "0.9rem", color: theme.palette.text.secondary, mb: 2, flex: 1 }}
        >
          {body}
        </Typography>
        <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap", mb: 2 }}>
          {chips.map((c) => (
            <Chip
              key={c}
              label={c}
              size="small"
              sx={{
                background: alpha(theme.palette.primary.main, 0.15),
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href={website} target="_blank" sx={{ color: theme.palette.primary.main, fontSize: "0.85rem", fontWeight: 600 }}>
            Live Site ↗
          </Link>
          <Link href={github} target="_blank" sx={{ color: theme.palette.text.secondary, fontSize: "0.85rem" }}>
            GitHub ↗
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

function Section({ children, alt, id, sx }) {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id={id}
      sx={{
        background: alt ? theme.palette.background.paper : theme.palette.background.default,
        py: { xs: 10, md: 14 },
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
}

function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const accent = theme.palette.primary.main;
  const iconFilter = isDark ? "brightness(0) invert(1)" : "brightness(0)";

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(150deg, ${theme.palette.background.default} 50%, ${alpha(accent, 0.08)} 100%)`,
          position: "relative",
          px: { xs: 3, sm: 6, md: 12 },
          py: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 5, md: 8 },
            width: "100%",
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {/* Text side */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.9rem",
                color: accent,
                letterSpacing: 4,
                mb: 1.5,
              }}
            >
              HI, I&apos;M
            </Typography>
            <Typography
              sx={{
                fontFamily: "permanent marker",
                fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                lineHeight: 1.05,
                color: isDark ? "#fff" : theme.palette.text.primary,
                mb: 1.5,
              }}
            >
              Seth Welch
            </Typography>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: { xs: "1rem", sm: "1.15rem" },
                color: accent,
                letterSpacing: 3,
                mb: 2.5,
              }}
            >
              FULL STACK · ENGINEERING LEAD
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                maxWidth: 440,
                mx: { xs: "auto", md: 0 },
                mb: 4,
              }}
            >
              I build products end-to-end and lead the teams that ship them.
              With a full stack background and experience as a founding engineer
              and team lead, I&apos;m focused on growing into engineering leadership.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                mb: 3,
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  const el = document.querySelector("#projects-box");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
                }}
                sx={{
                  background: accent,
                  color: theme.palette.getContrastText(accent),
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": { background: alpha(accent, 0.85) },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  const el = document.querySelector("#contact-box");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
                }}
                sx={{
                  borderColor: alpha(accent, 0.5),
                  color: accent,
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": { borderColor: accent, background: alpha(accent, 0.06) },
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Box>

          {/* Photo side */}
          <Box sx={{ flexShrink: 0, display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={PortraitImage}
              alt="Seth Welch"
              sx={{
                width: { xs: 220, sm: 280, md: 340 },
                height: { xs: 220, sm: 280, md: 340 },
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                border: `4px solid ${accent}`,
                boxShadow: `0 0 0 8px ${alpha(accent, 0.12)}, 0 20px 60px ${alpha(accent, 0.15)}`,
              }}
            />
          </Box>
        </Box>

        {/* Scroll indicator */}
        <Box
          onClick={() => {
            const el = document.querySelector("#about-me-box");
            if (el) globalThis.scrollTo({ top: el.getBoundingClientRect().top + globalThis.scrollY - 64, behavior: "smooth" });
          }}
          sx={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.35,
            cursor: "pointer",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
              "50%": { transform: "translateX(-50%) translateY(6px)" },
            },
            "&:hover": { opacity: 0.7 },
          }}
        >
          <KeyboardArrowDownIcon />
        </Box>
      </Box>

      {/* ── About ──────────────────────────────────────────────── */}
      <Section id="about-me-box" alt>
        <Box sx={{ maxWidth: 680, mx: "auto" }}>
          <Title>About Me</Title>
          <Typography sx={{ mt: 3, mb: 3, lineHeight: 1.9, fontSize: "1rem" }}>
            I&apos;m a Full Stack Software Engineer who has grown into engineering
            leadership across multiple startups. I&apos;ve led teams, driven
            architectural decisions, and helped build products from the ground
            up — with deep roots in JavaScript and React and experience spanning
            the full stack.
          </Typography>
          <Typography sx={{ lineHeight: 1.9, fontSize: "1rem" }}>
            I&apos;m passionate about both the craft of software and the people who
            build it. Outside of work I&apos;m a husband and father of three, with
            hobbies that include retro electronics, video games, soldering, and
            camping.
          </Typography>
        </Box>
      </Section>

      {/* ── Experience ─────────────────────────────────────────── */}
      <Section id="experience-box">
        <Title>Experience</Title>
        <Box sx={{ mt: 5, position: "relative" }}>
          {/* Timeline line */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: 20,
              top: 8,
              bottom: 8,
              width: 2,
              background: `linear-gradient(to bottom, ${alpha(accent, 0.6)}, ${alpha(accent, 0.1)})`,
            }}
          />

          {experience.map((job, i) => (
            <Box key={i} sx={{ display: "flex", mb: i < experience.length - 1 ? 6 : 0 }}>
              {/* Dot */}
              <Box sx={{ display: { xs: "none", md: "flex" }, flexShrink: 0, width: 48, pt: 0.75, justifyContent: "flex-start" }}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: accent,
                    boxShadow: `0 0 0 4px ${alpha(accent, 0.2)}`,
                    flexShrink: 0,
                  }}
                />
              </Box>

              {/* Card */}
              <Box
                sx={{
                  flex: 1,
                  background: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: { xs: 2.5, sm: 3.5 },
                }}
              >
                {/* Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.15rem", color: theme.palette.text.primary }}>
                      {job.title}
                    </Typography>
                    <Typography sx={{ color: accent, fontWeight: 600, fontSize: "0.95rem" }}>
                      {job.company}
                      {job.location && (
                        <Box component="span" sx={{ color: theme.palette.text.secondary, fontWeight: 400, ml: 1, fontSize: "0.85rem" }}>
                          · {job.location}
                        </Box>
                      )}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                    <Typography sx={{ fontSize: "0.88rem", color: theme.palette.text.secondary }}>
                      {job.period}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: theme.palette.text.disabled }}>
                      {job.duration}
                    </Typography>
                  </Box>
                </Box>

                {/* Categories */}
                {job.categories.map((cat) => (
                  <Box key={cat.name} sx={{ mt: 2 }}>
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        color: alpha(accent, 0.8),
                        mb: 1,
                      }}
                    >
                      {cat.name}
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                      {cat.bullets.map((b, j) => (
                        <Typography
                          key={j}
                          component="li"
                          sx={{ fontSize: "0.9rem", lineHeight: 1.75, color: theme.palette.text.secondary, mb: 0.5 }}
                        >
                          {b}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── Projects ───────────────────────────────────────────── */}
      <Section id="projects-box">
        <Title>Recent Projects</Title>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 3,
            mt: 5,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </Box>
      </Section>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <Section id="skills-box" alt>
        <Title>Skills</Title>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, sm: 3 },
            mt: 5,
          }}
        >
          {skills.map(({ text, icon }) => (
            <IconContainer key={text} text={text}>
              <img src={icon} alt={text} style={{ height: 48 }} />
            </IconContainer>
          ))}
        </Box>
      </Section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <Section id="contact-box">
        <Box sx={{ maxWidth: 480, mx: "auto", textAlign: "center" }}>
          <Title>Get In Touch</Title>
          <Typography sx={{ mt: 3, mb: 4, lineHeight: 1.9, fontSize: "1rem", color: theme.palette.text.secondary }}>
            Feel free to reach out — whether it&apos;s about a project, a question, or just to say hello.
          </Typography>
          <Button
            variant="contained"
            href="mailto:sethwelch85@gmail.com"
            sx={{
              background: accent,
              color: theme.palette.getContrastText(accent),
              fontWeight: 700,
              px: 4,
              py: 1.25,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": { background: alpha(accent, 0.85) },
            }}
          >
            sethwelch85@gmail.com
          </Button>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 3 }}>
            <IconButton
              aria-label="LinkedIn"
              onClick={() => window.open("https://www.linkedin.com/in/seth-welch-89910897", "_blank")}
            >
              <img src={LinkedinIcon} alt="LinkedIn" style={{ height: 24, filter: iconFilter }} />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              onClick={() => window.open("https://github.com/SethWelch", "_blank")}
            >
              <img src={GithubIcon} alt="GitHub" style={{ height: 24, filter: iconFilter }} />
            </IconButton>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default Home;
