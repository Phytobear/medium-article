import { Star, MoreHorizontal } from "lucide-react";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-1 mb-8">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm">Member-only story</span>
          </div>

          <h1
            className="text-[60px] leading-[68px] font-bold tracking-tight mb-4 text-black"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
            }}
          >
            10 Colours Not to Use in Monthly Finance Apps
          </h1>
          <h2 className="text-xl text-black mb-8">
            Golden tips and tricks that can make you unstoppable
          </h2>

          <div className="flex items-center justify-between py-8">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 relative overflow-hidden rounded-full">
                <Image
                  alt="Author"
                  src="https://miro.medium.com/v2/resize:fit:88/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <button className="text-gray-900 font-medium hover:text-gray-700">
                    Billiam BroHalloran
                  </button>
                  <button className="text-green-600 font-medium text-sm">
                    Follow
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <span>8 min read</span>
                  <span>·</span>
                  <span>Nov 18, 2024</span>
                  <span>·</span>
                  <button className="text-gray-500 hover:text-gray-700">
                    Published in Obsidian as all things should be
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {/* Introduction */}
          <p className="mb-8">
            Everyone knows that finance apps are a unique breed. They&apos;re
            supposed to keep you organised, calm, and definitely not crying into
            your morning coffee because of the colour palette. So today,
            let&apos;s talk about which colours you absolutely, definitely
            should avoid when making monthly finance apps. This isn&apos;t your
            typical colour theory guide—this is for those who like to live on
            the edge, or perhaps, like me, enjoy seeing a disaster happen in
            real-time. Let&apos;s get into it.
          </p>

          {/* Colours to Avoid */}
          <h2 className="text-2xl font-bold mt-12 mb-6">
            Colours to Avoid at All Costs
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-4">
            <li>
              <strong>Light Orange (fdba74)</strong>
              <br />
              This shade of Burnt Wallet Orange has the same effect as your bank
              manager sending you a &apos;We need to talk&apos; email. It&apos;s
              loud, unsettling, and frankly, it&apos;s not what you want staring
              back at you when you&apos;re trying to figure out where all your
              money went.
            </li>
            <li>
              <strong>Blue (2563ea)</strong>
              <br />
              Some might say this is a neutral. I say it&apos;s the exact shade
              of your accountant&apos;s face during tax season when you&apos;ve
              &quot;forgotten&quot; to mention some expenses. Do you want your
              users to feel like they owe the government their first-born child?
              No? Avoid it.
            </li>
            <li>
              <strong>Lavender (d8b4fe)</strong>
              <br />
              Lavender might seem calming, but in the context of expenses, it
              gives off serious &apos;unexpected tax audit&apos; vibes.
              It&apos;s soft, sure, but that softness feels more like a
              financial cushion that&apos;s just disappeared from under you.
              Maybe leave the lavender for aromatherapy, not expense tracking.
            </li>
            <li>
              <strong>Vomit Green (17a34a)</strong>
              <br />
              It&rsquo;s green, but not the good kind. It&apos;s the &quot;I
              regret that lunch&quot; kind, and the only way to make it worse is
              to give it a gradient so it looks like some kind of heinous green
              metal, the kind you&apos;d imagine forged in the fires of regret
              and bad budgeting decisions. Stick to healthier greens.
            </li>
          </ul>

          {/* Dos and Donts */}
          <h2 className="text-2xl font-bold mt-12 mb-6">
            Do&apos;s and Don&apos;ts
          </h2>
          <h3 className="text-xl font-semibold mt-8 mb-4">Do&apos;s</h3>
          <ul className="list-disc list-inside mb-8 space-y-4">
            <li>
              <strong>Use Tailwind for Colours</strong>: Colours are hard to get
              wrong when using Tailwind, so make sure to leverage that. However,
              doing a little research into colour theory never hurts.
              Understanding how colours interact and how they affect mood can
              take your design from &quot;Daddy why did the man bring this
              sadness into the world?&quot; to &quot;I cant now honey I&apos;m
              doing my finances&quot;
            </li>
            <li>
              <strong>Comment Dashes</strong>: Try having your comments floating
              in a sea of dashes. As they drift away, you can ponder your life
              choices and perhaps feel a strange sense of existential calm. Or
              just regret. Mostly regret.
            </li>
            <li>
              <strong>Calculating National Insurance and Taxes</strong>: Do make
              your comments excessively verbose, like you&apos;re preparing a
              script for an epic play titled &apos;The Adventures of Endless Tax
              Calculations.&apos; The longer, the better, until readers give up
              halfway through and decide filing taxes sounds more fun. It&apos;s
              a perfect blend of code documentation and a little existential
              comedy. Spoiler: the financial situation is still a tragedy.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Don&apos;ts</h3>
          <ul className="list-disc list-inside mb-8 space-y-4">
            <li>
              <strong>Avoid Gradients on Greens</strong>: Don&apos;t try to be
              fancy with your greens by adding a gradient. The human brain reads
              it as uncertain terrain which is exactly how people don&apos;t
              want to feel about their cash flow.
            </li>
            <li>
              <strong>Avoid Metallic Gradients on Greens</strong>: Don&apos;t
              attempt to make your greens look edgy by adding a metallic
              gradient. The result looks like something forged in the fires of
              bad regret.
            </li>
          </ul>

          {/* Try these tips and tricks */}
          <h2 className="text-2xl font-bold mt-12 mb-6">
            Try These Simple Tips & Tricks
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-4">
            <li>
              <strong>Not Sure How to Remind Yourself?</strong>: If you&apos;re
              struggling to set reminders, try this creative visual cue:
              <div className="my-4">
                --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
                --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
                --- --- --- --- --- --- --- --- --- --- --- --- Maths --- ---
                --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
                --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
                --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
              </div>
              It&apos;s not only an aesthetic touch but also a clever way to
              centre your thoughts before they drift away into the vast sea of
              dashes—just make sure you don’t float too far out, or you might
              end up questioning your life choices.
            </li>
            <li>
              <strong>Certified Dead by Everyone, Including Your Code</strong>:
              Is for real dead? Is that class so dead it&apos;s practically a
              fashion statement? Tag it <code>fr_ded-md</code> and let everyone
              know it&apos;s not just dead, it&apos;s trending dead.
            </li>
            <li>
              <strong>Repetition, Repetition, Conditional Repetition</strong>:
              Reset button repetition getting you down? Try creating reusable
              components! Instead of copy-pasting <code>PosNegButton</code> with
              minor changes, create a single, parameterised version that adapts.
              If conditional rendering feels like a broken record, then break
              that loop and make life simpler! It&apos;s like copy-pasting a
              joke but changing the punchline slightly—it might get a chuckle
              the first time, but by the tenth time, everyone&apos;s questioning
              your comedic timing and your coding style. Instead, create
              reusable components and parameterise them. Your codebase (and any
              developer reading it) will thank you.
            </li>
            <li>
              <strong>It&apos;s a Kind of Logic</strong>: Using magic numbers in
              your code is like singing alongside Freddie himself, sure, you
              might enjoy it, but you&apos;ll probably throw off the whole song.{" "}
              <code>12570</code> could be a salary limit, an ancient prophecy,
              the meaning of life? So if you&apos;re under pressure, use
              constants, give those numbers meaning, and you can have it all.
              <pre className="bg-gray-100 p-4 rounded my-4">
                <li>
                  <strong>Example</strong>
                  <pre className="bg-gray-800 p-4 rounded my-4">
                    {`
const PERSONAL_ALLOWANCE = 12570;
const HIGHER_RATE_THRESHOLD = 50270;
const ADDITIONAL_RATE_THRESHOLD = 125140;

useEffect(() => {
  if (userIncome < PERSONAL_ALLOWANCE) {
    setUsersTaxableIncome(0);
  } else if (userIncome > PERSONAL_ALLOWANCE && userIncome < ADDITIONAL_RATE_THRESHOLD) {
    setUsersTaxableIncome(parseFloat(userIncome - PERSONAL_ALLOWANCE));
  } else if (userIncome > ADDITIONAL_RATE_THRESHOLD) {
    setUsersTaxableIncome(parseFloat(userIncome));
  }
}, [userIncome]);
    `}
                  </pre>
                </li>
              </pre>
            </li>
          </ul>

          {/* Final Thoughts Section */}
          <h2 className="text-2xl font-bold mt-12 mb-6">Final Thoughts</h2>
          <p className="mb-8">
            Picking the right colours isn&apos;t just about aesthetics;
            it&apos;s about making sure your users don&apos;t feel like
            they&apos;re about to embark on a terrifying financial
            rollercoaster. So, whether it&apos;s avoiding greens that look like
            they were forged in regret or making sure the lavender stays in your
            diffuser, remember: designing a finance app is as much about user
            experience as it is about the cold, hard numbers. Let&apos;s bring a
            little magic to money management—minus the tragic colours. Have you
            encountered other abominable hues in your design adventures? Share
            them, and maybe we can build the definitive list of &apos;Top 10
            Worst Colour Combos to use when building an App.&apos; In the
            meantime, we&apos;ll be over here, waiting for Frankie to bring out
            the next app—hopefully with fewer chartreuse gradients. Stay
            mindful, stay chill, and keep those finances feeling fabulous.
          </p>
        </div>
      </article>
    </main>
  );
}
