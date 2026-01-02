import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "Behind the Scenes: My Life as a WIE Chairperson at IEEE-CIET SB",
      text: `it's a role filled with planning, coordination, problem-solving, and a lot of learning behind the curtains.

My journey involves organizing everything from hackathons and coding contests to workshops and tech talks, ensuring smooth communication between students, faculty mentors, and the core team. Most people see the final event — the registrations, the posters, the sessions — but what happens before that is where the real work lies.

On a typical day, I'm:
Brainstorming event ideas that truly add value to students
Preparing documentation, timelines, and task breakdowns
Coordinating with 50+ students and a 3–4 member core team
Managing promotions, registrations, and on-ground execution
Debugging last-minute tech issues (yes, that happens a lot too!)
Handling sponsorship outreach and professional communication

From designing workflows to reviewing website updates, maintaining records, and motivating the team — I’ve learned how to lead with responsibility and adapt under pressure.

The biggest challenge? Time management. Balancing academics with community building pushes me to be disciplined. The biggest reward? Seeing students learn, participate, and grow through initiatives we worked so hard to bring to life.

ACM has shaped me not just as a developer but as someone who can collaborate, execute, and communicate effectively. Every event taught me something new — especially how impactful teamwork and planning can be when done right.`,
    },
    {
      id: 2,
      title: "Why I Chose Analyst as My Career Path",
      text: `Because it sits at the intersection of logic, creativity, and real-world impact — three things that naturally drive me.

Early in my college journey at Chitkara University, I realized that I didn’t just enjoy writing code — I enjoyed building systems, solving problems efficiently, and improving them through debugging and optimization. Whether it was implementing scheduling algorithms in C++, designing payroll logic in Java, or developing REST APIs during my internship, what excited me most was the process of engineering solutions, not just creating them.

Software engineering appeals to me because:
It lets me solve complex problems with scalable solutions
I can transform ideas into functional products
There’s always room to learn, iterate, and improve
It impacts people directly — from students using chapter websites I built to users interacting with full-stack apps

I love the challenge of breaking a big problem into structured components, designing workflows, and collaborating with teams — something I practice actively in roles like ACM Secretary and through hackathons.
To me, software engineering is more than development — it’s about thinking, designing, building, and refining. And that mindset is exactly how I want to shape my career.
I want to build software that is efficient, meaningful, and user-focused, while growing as an engineer who values structure, collaboration, and innovation.

That’s why I chose this path — because it doesn’t just match my skills, it matches how I think.`,
    },
    {
      id: 3,
      title: "Things I Wish I Knew Before Starting Engineering",
      text: `If I could time-travel back to Day 1 of engineering, I’d shake my own shoulders and say:
“Relax! It’s not a race. Also, Google will be your best friend.”

Here’s the survival guide I wish came pre-installed with my degree:

You don’t need to know everything. You just need Wi-Fi and the confidence to search it up.

DSA = Gym for your brain. Skip it, and your logic gets weak. Do it daily, and suddenly you’re unstoppable.

Your code WILL break. Often. And honestly? That’s normal. Debugging is basically engineering therapy.

Projects > Notes. The real syllabus is: Build → Fail → Fix → Repeat.

Communication matters. If you can explain your code to a human, congratulations — you’re already ahead of half the class.

Imposter syndrome visits everyone. It’ll sit beside you, whisper “You don’t belong here,” and then disappear once you ship your first real project.

Hackathons are chaotic fun. You’ll form teams at 2 AM, pitch at 9 AM, and question life at 3 PM — but the growth is worth it.

Consistency beats overnight cramming. 1 hour a day keeps confusion away. 10 hours the night before? Nope, chaos guaranteed.

Engineering is creative too! Yes, you can center a div AND design a system architecture. Both are flexes.

Take care of yourself. Sleep is not optional. Your brain stops compiling without it.

Learn to enjoy the process. Because the most accurate definition of engineering is:
“Preparing you for bugs you didn’t know you’d face.”

And finally:

No one warned me that engineering is 30% coding, 20% patience, and 50% trying to fix something at the last minute — but now I know, and I kinda love it.`
    },
    {
      id: 4,
      title: "Things They Don’t Teach You in Engineering (But You Learn Anyway)",
      text: `Engineering textbooks are thick, but somehow they never include the important chapters, like:

“How to fix your code at 3 AM when StackOverflow is down.”
or
“Why your UI looks perfect on your laptop and cursed on every other screen.”

So, here are the unofficial lessons I picked up along the way — the ones no syllabus prepared me for:

1. Your code has feelings — and it gets moody.

Sometimes it runs. Sometimes it doesn’t.
And the error message will be something like:
“SyntaxError: Unexpected token” (aka: figure it out yourself, bestie).

2. Debugging is 90% detective work, 10% fixing.

You’ll stare at the code, sip coffee, whisper “Why?”, and then realize the bug was a missing semicolon.
Classic plot twist.

3. Group projects teach negotiation skills better than any management course.

You don’t assign roles — you fight for them.
And if you become the team lead, suddenly you're also:

the debugger

the UI fixer

the reminder app

the emotional support human

4. Hackathons are more about survival than coding.

You’ll:

form teams last minute

build MVPs overnight

give presentations with 2 hours of sleep

question life choices

grow 10x in 48 hours

And somehow… do it again next month.

5. Communication is a real engineering skill.

Explaining your project clearly > building it quietly.
If you can make a professor, teammate, and recruiter understand your work without confusion,
you just unlocked a rare achievement.

6. Google is part of the curriculum.

The degree is B.Tech.
The skill is B.Tech-with-Browser-Tabs-open-always.

7. Your network matters.

The real-life formula is:
Knowledge × Connections × Consistency = Opportunities

And surprisingly, connections don’t form if you never talk to humans.

8. You’ll feel like you don’t belong here at least once.

It’s normal. It’s universal. It’s temporary.
It goes away right after you build something cool and think:
“Wait… I actually did that?”

9. Consistency beats cramming.

1 hour daily on skills you care about = progress
10 hours the night before = panic + regret

10. Engineering shapes your mindset more than your marks.

It teaches you to:

break problems down

stay curious

learn by building

adapt fast

handle pressure

and fix things you never knew you’d face`
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  // Track which posts are expanded
  const [expanded, setExpanded] = useState({});

  function toggleExpand(id) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12, textAlign: "center" }}
      >
        📝 My Blog
      </motion.h2>
      <p className="blog-sub">
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => {
          const isLong = p.text.length > 220;
          const isExpanded = expanded[p.id];
          const displayText = isLong && !isExpanded ? p.text.slice(0, 400) + "..." : p.text;

          // Enhanced formatting for blog text
          function renderBlogText(text) {
            const lines = text.split("\n");
            return lines.map((line, i) => {
              const trimmed = line.trim();
              // Blank line -> horizontal line
              if (trimmed === "") {
                return <hr className="blog-hr" key={i} />;
              }
              // Numbered title or section (e.g., "1. Title" or "Conclusion:")
              if (
                /^\d+\.\s/.test(trimmed) || // numbered
                trimmed.endsWith(":")      // ends with colon
              ) {
                return (
                  <div
                    key={i}
                    className="blog-section-title blog-white"
                  >
                    {trimmed}
                  </div>
                );
              }
              // Subtitle: line starts with uppercase and is short (heuristic)
              if (
                /^[A-Z][^:]+$/.test(trimmed) &&
                trimmed.length < 60
              ) {
                return (
                  <div
                    key={i}
                    className="blog-section-subtitle blog-white"
                  >
                    {trimmed}
                  </div>
                );
              }
              // Normal text
              return (
                <div key={i} className="blog-white" style={{ margin: "0 0 4px 0" }}>
                  {trimmed}
                </div>
              );
            });
          }

          return (
            <motion.div
              key={p.id}
              className="blog-post"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              <h3 className="post-title">{p.title}</h3>
              <div className="post-text" style={{}}>
                {renderBlogText(displayText)}
                {isLong && (
                  <button
                    className="read-more-btn"
                    style={{
                      background: "none",
                      border: "none",
                      color: "#00b4ff",
                      cursor: "pointer",
                      marginLeft: 6,
                      fontWeight: 500,
                      fontSize: 14,
                      padding: 0,
                    }}
                    onClick={() => toggleExpand(p.id)}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>
              <div className="vote-container">
                <motion.button
                  onClick={() => vote(p.id, "agree")}
                  disabled={!!p.userVote}
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.15 }}
                  className={`vote-btn-circle agree ${
                    p.userVote === "agree" ? "active" : ""
                  }`}
                >
                  <ThumbsUp size={20} />
                  <motion.span
                    key={p.agree}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="vote-count"
                  >
                    {p.agree}
                  </motion.span>
                </motion.button>

                <motion.button
                  onClick={() => vote(p.id, "disagree")}
                  disabled={!!p.userVote}
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.15 }}
                  className={`vote-btn-circle disagree ${
                    p.userVote === "disagree" ? "active" : ""
                  }`}
                >
                  <ThumbsDown size={20} />
                  <motion.span
                    key={p.disagree}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="vote-count"
                  >
                    {p.disagree}
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
