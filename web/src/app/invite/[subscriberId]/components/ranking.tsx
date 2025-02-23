import Image from "next/image";
import MEDAL_COOPER from "../../../../assets/medal-cooper.svg";
import MEDAL_GOLD from "../../../../assets/medal-gold.svg";
import MEDAL_SILVER from "../../../../assets/medal-silver.svg";

export function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-4">
				<div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">1º</span> | Renan Fachin
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1030
					</span>
					<Image
						src={MEDAL_GOLD}
						alt="medal_gold"
						className="absolute top-0 right-8"
					/>
				</div>

				<div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">2º</span> | Renan Fachin
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1030
					</span>
					<Image
						src={MEDAL_SILVER}
						alt="medal_gold"
						className="absolute top-0 right-8"
					/>
				</div>

				<div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">3º</span> | Renan Fachin
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1030
					</span>
					<Image
						src={MEDAL_COOPER}
						alt="medal_gold"
						className="absolute top-0 right-8"
					/>
				</div>
			</div>
		</div>
	);
}
