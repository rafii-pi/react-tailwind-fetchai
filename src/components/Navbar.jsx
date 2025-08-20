import { Link } from "react-router-dom";
import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Navbar = (props) => {
	const titleNavbar = {
		titleNav: "Mualaz AI.",
		fliNav: "Mode",
		sliNav: props.subNav,
	};

	return (
		<div className="fixed top-0 left-0 w-full mx-auto bg-slate-50 text-gray-800 px-6 py-3 opacity-100 shadow-xl">
			<nav className="mx-auto flex place-content-between items-center">
				<div className="flex gap-2">
					<PuzzlePieceIcon className="h-6 w-6 text-zinc-700" />
					<h1 className="bg-gradient-to-r from-zinc-700 to-slate-700 bg-clip-text text-transparent font-bold text-xl">
						{titleNavbar.titleNav}
					</h1>
				</div>
				<div>
					<ul className="flex gap-5 items-center text-sm">
						<li>
							<button className="hover:opacity-80 active:opacity-80">
								{titleNavbar.fliNav}
							</button>
						</li>
						<li className="bg-gradient-to-r from-zinc-700 to-slate-700 text-slate-50 px-3 py-1 rounded-4xl hover:opacity-80 active:opacity-80 flex gap-1">
							<Link to="/chat" className="">
								{titleNavbar.sliNav}
							</Link>
							<ArrowRightIcon className="h-5 w-5 text-slate-50" />
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
