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

          {/* Colours to Avoid Section */}
          <h2 className="text-2xl font-bold mt-12 mb-6">
            Colours to Avoid at All Costs
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-4">
            <li>
              <strong>Light Orange (fdba74)</strong>
              <br />
              This shade of Burnt Wallet Orange has the same effect as your bank
              manager sending you a &apos;We need to talk&apos; email...
            </li>
            <li>
              <strong>Blue (2563ea)</strong>
              <br />
              Some might say this is a neutral. I say it&apos;s the exact shade
              of your accountant&apos;s face during tax season...
            </li>
            {/* ...continue for the rest of the list items */}
          </ul>

          {/* Do&apos;s and Don&apos;ts Section */}
          <h2 className="text-2xl font-bold mt-12 mb-6">
            Do&apos;s and Don&apos;ts
          </h2>
          <h3 className="text-xl font-semibold mt-8 mb-4">Do&apos;s</h3>
          <ul className="list-disc list-inside mb-8 space-y-4">
            <li>
              <strong>Use Tailwind for Colours</strong>: Colours are hard to get
              wrong when using Tailwind, so make sure to leverage that...
            </li>
            <li>
              <strong>Stick to Subtle Greens</strong>: Light green can
              communicate positive growth without the panic of &quot;Vomit
              Green&quot;...
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Don&apos;ts</h3>
          <ul className="list-disc list-inside mb-8 space-y-4">
            <li>
              <strong>Avoid Gradients on Greens</strong>: Don&apos;t try to be
              fancy with your greens by adding a gradient...
            </li>
            <li>
              <strong>Avoid Metallic Gradients on Greens</strong>: Don&apos;t
              attempt to make your greens look edgy by adding a metallic
              gradient...
            </li>
          </ul>

          {/* Final Thoughts Section */}
          <h2 className="text-2xl font-bold mt-12 mb-6">Final Thoughts</h2>
          <p className="mb-8">
            Picking the right colours isn&apos;t just about aesthetics;
            it&apos;s about making sure your users don&apos;t feel like
            they&apos;re about to embark on a terrifying financial
            rollercoaster...
          </p>
        </div>
      </article>
    </main>
  );
}
