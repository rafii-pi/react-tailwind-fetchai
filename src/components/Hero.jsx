import { BoltIcon } from "@heroicons/react/20/solid";

const Hero = () => {
	return (
		<div className="ml-0 justify-start">
			{/* Badge New */}
			<div className="flex items-center gap-2 bg-gradient-to-r from-zinc-700 to-slate-700 text-slate-50 py-1 px-3 rounded-full text-xs justify-between w-fit">
				<h1 className="font-semibold bg-slate-50 px-2 rounded-full text-zinc-800">
					New
				</h1>
				<p className="mr-2">Hasilkan Jawaban Terbaik Lu Olangg..</p>
			</div>

			{/* Title */}
			<div className="mt-6">
				<h3 className="text-3xl font-semibold tracking-wider">Mualaz-AI.</h3>
				<h1 className="text-4xl font-extrabold tracking-wide mt-2">
					Apakah Beliau Termasuk dalam tingkat kemalasan yang tak tertolong?{" "}
					<span className="italic bg-gradient-to-r from-zinc-700 to-slate-700 bg-clip-text underline">
						Mualaz beut nulis prompt detail
					</span>{" "}
					cuma buat dijelasin sama AI?
				</h1>

				{/* Description */}
				<p className="text-sm mt-4 text-zinc-600 leading-relaxed">
					Santai woilah cik, kami nyediain e-ai(AI) yaitu <b>Mualaz-AI</b> buat
					beliau-beliau ini bertanya atau meminta jawaban detail dari suatu
					pertanyaan, tanpa perlu prompt woilah cik deymn. Lah kok iso alamak?
					Ya iso lah wong saya indo pipel. Langsung gas coba aja cik, gaperlu
					kebanyakan yapping slurd.
				</p>

				{/* CTA Button */}
				<div className="flex items-center gap-1 bg-gradient-to-r from-zinc-700 to-slate-700 text-slate-50 px-4 py-2 rounded-full hover:opacity-90 active:opacity-95 mt-6 w-fit cursor-pointer">
					<button className="font-semibold">Meluncur</button>
					<BoltIcon className="w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
