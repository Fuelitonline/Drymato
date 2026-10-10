import Image from "next/image";
import { FaLeaf, FaShieldAlt, FaHandshake, FaArrowRight, FaArrowDown } from "react-icons/fa";

// Set this to the same file your navbar uses for the Drymato logo
const DRYMATO_LOGO_SRC = "/drymato-logo.png";

const MANUFACTURED_PRODUCTS = [
    "Dehydrated Tomato",
    "Tomato Powder",
    "Tomato Flakes",
    "Onion Powder",
    "Onion Flakes",
    "Garlic Powder",
    "Garlic Flakes",
    "Spinach Powder",
    "Other dehydrated vegetables and food ingredients, subject to availability and production requirements.",
];

const MARKETING_RESPONSIBILITIES = [
    "Product marketing",
    "Brand communication",
    "Customer enquiries",
    "B2B business development",
    "Buyer communication",
    "Product presentation",
    "Commercial discussions",
    "Private-label discussions",
    "Market development",
    "Customer coordination",
    "Sales and distribution coordination",
];

// One point per line, always a single column
function LeafList({ items }) {
    return (
        <ul className="space-y-2.5">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground/80 leading-snug">
                    <FaLeaf className="w-3 h-3 mt-[5px] text-forest shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

// One block: full width and stacked below xl, one of three columns on xl+
function InfoBlock({ icon: Icon, title, children }) {
    return (
        <div className="py-9 sm:py-10 border-b border-sage/40 last:border-b-0 xl:border-b-0 xl:py-2 xl:px-8 xl:first:pl-0 xl:last:pr-0">
            <div className="mb-5">
                <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-forest shrink-0" />
                    <h3 className="font-serif text-xl sm:text-2xl xl:text-[22px] 2xl:text-2xl font-bold text-forest leading-tight">
                        {title}
                    </h3>
                </div>
                <span className="block mt-3 w-10 h-[2px] bg-brick" />
            </div>
            <div className="max-w-3xl space-y-4 text-foreground/75 text-sm sm:text-base xl:text-sm 2xl:text-[15px] font-medium leading-relaxed">
                {children}
            </div>
        </div>
    );
}

export default function ManufacturingPartnerSection() {
    return (
        <section className="relative w-full bg-surface py-14 sm:py-12 md:py-16 overflow-hidden z-10">
            <div className="absolute top-10 right-[-80px] w-80 h-80 bg-mustard/5 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-20 left-[-80px] w-72 h-72 bg-sage/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-4">

                {/* ================= TOP ROW ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* Left: eyebrow + farm image */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-5 text-forest">
                            <FaLeaf className="w-3.5 h-3.5 shrink-0" />
                            <span className="text-[11px] sm:text-sm font-extrabold tracking-[0.18em] sm:tracking-[0.2em] uppercase">
                                Our Manufacturing Partner
                            </span>
                            <span className="hidden sm:block h-px flex-1 bg-mustard/50" />
                        </div>

                        <div className="relative w-full h-[250px] sm:h-[320px] lg:h-[360px] rounded-tl-[56px] rounded-br-[56px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-[0_20px_50px_rgba(36,56,34,0.14)]">
                            <Image
                                src="/hero-section/guava-farm.png"
                                alt="Guava growing on a Drymato farm"
                                fill
                                sizes="(min-width: 1024px) 40vw, 100vw"
                                className="object-cover"
                            />
                            <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-sm px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-md border border-sage/25">
                                <FaLeaf className="w-5 h-5 text-forest shrink-0" />
                                <div className="leading-tight">
                                    <p className="font-serif text-sm sm:text-base font-bold text-forest">From Our Farms</p>
                                    <p className="text-[11px] sm:text-xs font-medium text-foreground/60">to Your Kitchen</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: logo | divider | heading + copy */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

                            {/* Logo: transparent, no background */}
                            <div className="shrink-0 w-40 sm:w-48 md:w-52 lg:w-56">
                                <Image
                                    src="/Ranthambhore-logo.png"
                                    alt="Ranthambhore Organic Agro Foods logo"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            <span className="hidden md:block self-stretch w-px bg-sage/40" aria-hidden="true" />
                            <span className="md:hidden h-px w-24 bg-sage/40" aria-hidden="true" />

                            <div className="text-center md:text-left space-y-4">
                                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-bold text-forest leading-[1.15] tracking-tight">
                                    Ranthambhore Organic Agro Foods
                                </h2>
                                <p className="text-foreground/75 text-sm sm:text-base font-medium leading-relaxed">
                                    Ranthambhore Organic Agro Foods, based in Sawai Madhopur, Rajasthan, is Drymato&apos;s manufacturing partner and operates the manufacturing facility responsible for the production of Drymato&apos;s dehydrated food ingredients.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 font-serif text-foreground/80 text-sm sm:text-base font-bold leading-relaxed text-center md:text-left">
                            Drymato works as the marketing and business partner, handling product marketing, customer communication, business development, enquiries and market-facing activities for the products manufactured by Ranthambhore Organic Agro Foods.
                        </p>
                    </div>
                </div>

                {/* ================= THREE FULL-WIDTH BLOCKS ================= */}
                <div className="mt-12 md:mt-16 border-t border-sage/40 xl:border-t-0 xl:grid xl:grid-cols-3 xl:divide-x xl:divide-sage/40">

                    <InfoBlock icon={FaLeaf} title="Manufacturing & Quality">
                        <p>
                            The manufacturing unit is engaged in the processing and manufacturing of dehydrated food ingredients, including products such as:
                        </p>
                        <LeafList items={MANUFACTURED_PRODUCTS} />
                        <p>
                            Manufacturing, processing, packaging and applicable quality-control activities are carried out through the manufacturing facility of Ranthambhore Organic Agro Foods.
                        </p>
                    </InfoBlock>

                    <InfoBlock icon={FaShieldAlt} title="FSSAI & Legal Compliance">
                        <p>
                            Ranthambhore Organic Agro Foods is a legally registered manufacturing business and operates its food manufacturing activities under applicable food-safety and regulatory requirements.
                        </p>
                        <p>
                            The manufacturing unit holds applicable FSSAI registration/licensing, subject to the products and activities covered under the relevant licence.
                        </p>
                        <p>
                            Where a particular buyer, product or destination requires additional certifications, laboratory testing or regulatory documentation, the applicable requirements can be discussed and provided where available and applicable.
                        </p>
                        <div className="flex items-center gap-8 pt-3">
                            <Image
                                src="/icons/fssai.png"
                                alt="FSSAI"
                                width={380}
                                height={199}
                                className="w-16 sm:w-20 h-auto object-contain"
                            />
                            <span className="self-stretch w-px bg-mustard/60" aria-hidden="true" />
                            <p className="font-serif text-md sm:text-base font-extrabold text-forest leading-tight">
                                Safe Food<br />Better Health
                            </p>
                        </div>
                    </InfoBlock>

                    <InfoBlock icon={FaHandshake} title="Drymato — Marketing Partner">
                        <p>
                            Drymato is the marketing and market-facing partner for products manufactured by Ranthambhore Organic Agro Foods.
                        </p>
                        <p>Drymato is responsible for activities including:</p>
                        <LeafList items={MARKETING_RESPONSIBILITIES} />
                        <p>
                            The manufacturing of the products marketed under Drymato is undertaken through the manufacturing facility of Ranthambhore Organic Agro Foods.
                        </p>
                    </InfoBlock>
                </div>

                {/* ================= FROM MANUFACTURING TO MARKET ================= */}
                <div className="relative mt-6 md:mt-8 overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-forest to-forest-light shadow-[0_25px_60px_rgba(36,56,34,0.08)]">
                    <div
                        className="absolute inset-0 opacity-[0.12] filter brightness-0 invert pointer-events-none"
                        style={{
                            backgroundImage: "url('/tomatolefttree-removebg.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left bottom",
                            backgroundSize: "auto 110%",
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-8 items-center px-6 py-9 sm:px-10 sm:py-10 xl:px-12">

                        {/* Title */}
                        <div className="xl:col-span-3 text-center xl:text-left">
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                                From Manufacturing to Market
                            </h3>
                            <span className="block mt-3 w-10 h-[2px] bg-mustard mx-auto xl:mx-0" />
                        </div>

                        {/* Flow: manufacturer -> Drymato */}
                        <div className="xl:col-span-5 flex flex-col md:flex-row items-center md:items-start xl:items-center justify-center gap-5 md:gap-6">

                            <div className="flex items-center gap-4 w-full max-w-sm md:w-auto md:max-w-none">
                                <div className="shrink-0 w-[68px] h-[68px] sm:w-20 sm:h-20 rounded-full bg-surface flex items-center justify-center p-2">
                                    <Image
                                        src="/Ranthambhore-logo.png"
                                        alt="Ranthambhore Organic Agro Foods"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="leading-snug">
                                    <p className="font-serif text-base sm:text-lg font-bold text-white">Ranthambhore Organic Agro Foods</p>
                                    <p className="mt-1 flex items-start gap-1.5 text-xs sm:text-[13px] font-medium text-white/80">
                                        <FaArrowRight className="w-2.5 h-2.5 mt-[3px] text-mustard shrink-0" />
                                        Manufacturing &amp; Processing
                                    </p>
                                </div>
                            </div>

                            <FaArrowDown className="md:hidden w-4 h-4 text-mustard" aria-hidden="true" />
                            <FaArrowRight className="hidden md:block w-5 h-5 mt-7 xl:mt-0 text-mustard shrink-0" aria-hidden="true" />

                            <div className="flex items-center gap-4 w-full max-w-sm md:w-auto md:max-w-none">
                                <div className="shrink-0 w-[68px] h-[68px] sm:w-20 sm:h-20 rounded-full bg-surface flex items-center justify-center p-2.5">
                                    <Image
                                        src={DRYMATO_LOGO_SRC}
                                        alt="Drymato"
                                        width={120}
                                        height={60}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="leading-snug">
                                    <p className="font-serif text-base sm:text-lg font-bold text-white">Drymato</p>
                                    <p className="mt-1 flex items-start gap-1.5 text-xs sm:text-[13px] font-medium text-white/80">
                                        <FaArrowRight className="w-2.5 h-2.5 mt-[3px] text-mustard shrink-0" />
                                        Marketing, Brand &amp; Market Development
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Closing statement */}
                        <div className="xl:col-span-4 xl:pl-8 xl:border-l xl:border-white/20 pt-6 xl:pt-0 border-t border-white/20 xl:border-t-0">
                            <p className="text-white/85 text-xs sm:text-sm font-medium leading-relaxed text-center xl:text-left max-w-2xl mx-auto xl:max-w-none">
                                This partnership allows Drymato to focus on building the brand and connecting with customers while manufacturing and processing activities are carried out through its manufacturing partner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}