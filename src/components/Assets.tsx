import React from "react";

export function HomeStoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 40 L85 40 L85 90 L15 90 Z" fill="currentColor" />
      <path d="M15 40 L15 30 C15 25 20 20 25 20 L75 20 C80 20 85 25 85 30 L85 40" />
      <path d="M10 40 L90 40" strokeWidth="10" />
      {/* Awning stripes */}
      <path d="M25 40 L25 55" />
      <path d="M42 40 L42 55" />
      <path d="M58 40 L58 55" />
      <path d="M75 40 L75 55" />
      <path
        d="M10 40 C10 48 18 48 18 40 M18 40 C18 48 32 48 32 40 M32 40 C32 48 50 48 50 40 M50 40 C50 48 68 48 68 40 M68 40 C68 48 82 48 82 40 M82 40 C82 48 90 48 90 40"
        fill="currentColor"
      />
      <rect x="35" y="60" width="30" height="30" fill="white" stroke="none" />
      <path d="M35 60 L65 60 L65 90 L35 90 Z" />
    </svg>
  );
}

export function PeopleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      {/* Hand left */}
      <path d="M15 70 C25 80 40 85 50 85 C60 85 75 80 85 70 C88 67 85 62 82 65 C75 72 60 76 50 76 C40 76 25 72 18 65 C15 62 12 67 15 70 Z" />
      <path d="M10 60 C15 70 30 75 40 75 C43 75 43 70 40 70 C30 70 18 65 15 58 C13 55 8 57 10 60 Z" />
      <path d="M90 60 C85 70 70 75 60 75 C57 75 57 70 60 70 C70 70 82 65 85 58 C87 55 92 57 90 60 Z" />

      {/* People */}
      <circle cx="50" cy="30" r="8" />
      <path d="M40 55 C40 45 60 45 60 55 L60 65 L40 65 Z" />

      <circle cx="30" cy="40" r="6" />
      <path d="M22 62 C22 54 38 54 38 62 L38 65 L22 65 Z" />

      <circle cx="70" cy="40" r="6" />
      <path d="M62 62 C62 54 78 54 78 62 L78 65 L62 65 Z" />
    </svg>
  );
}

export function BowlPlantIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path
        d="M10 75 C20 85 40 90 50 90 C60 90 80 85 90 75 C95 70 88 65 83 70 C75 78 58 82 50 82 C42 82 25 78 17 70 C12 65 5 70 10 75 Z"
        className="text-resq-dark"
      />

      <path d="M20 50 C20 70 80 70 80 50 Z" className="text-resq-orange" />

      <path
        d="M50 62 C50 62 43 57 43 54 C43 51 46 49 50 51 C54 49 57 51 57 54 C57 57 50 62 50 62 Z"
        fill="white"
      />

      <path
        d="M50 45 L50 20 M50 35 C42 35 38 28 38 28 C38 28 46 25 50 35 M50 28 C58 28 62 20 62 20 C62 20 54 18 50 28"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-resq-dark"
      />
    </svg>
  );
}

export function BoxIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" {...props}>
      {/* Leaves in back */}
      <path d="M70 60 C50 40 40 60 70 80" fill="#90B876" />
      <path d="M80 50 C70 30 50 40 70 70" fill="#044B34" />
      <path d="M130 60 C150 40 160 60 130 80" fill="#90B876" />
      <path d="M120 50 C130 30 150 40 130 70" fill="#044B34" />

      {/* Veggies */}
      {/* Carrot */}
      <path
        d="M140 80 L160 50 C165 40 170 45 165 55 L150 85 Z"
        fill="#FF6221"
      />
      <path d="M80 80 L60 50 C55 40 50 45 55 55 L70 85 Z" fill="#FF6221" />
      {/* Pumpkin/Squash */}
      <circle cx="80" cy="75" r="20" fill="#fbbd61" />
      <circle cx="100" cy="80" r="25" fill="#fbbd61" />
      <circle cx="120" cy="75" r="20" fill="#fbbd61" />

      {/* Bottle */}
      <rect x="95" y="40" width="10" height="20" fill="#E4F0DA" />
      <rect x="92" y="35" width="16" height="6" fill="#044B34" rx="2" />
      <rect x="90" y="55" width="20" height="40" fill="#FF6221" rx="4" />

      {/* Box Back */}
      <path d="M40 90 L160 90 L155 140 L45 140 Z" fill="#d49c63" />
      {/* Box Flaps */}
      <path d="M40 90 L20 100 L45 140 L45 90 Z" fill="#e6b17a" />
      <path d="M160 90 L180 100 L155 140 L155 90 Z" fill="#c38851" />
      {/* Box Front */}
      <path d="M45 95 L155 95 L155 145 L45 145 Z" fill="#e6b17a" />

      {/* Heart */}
      <path
        d="M100 125 C100 125 93 118 93 113 C93 109 96 106 100 109 C104 106 107 109 107 113 C107 118 100 125 100 125 Z"
        fill="#d49c63"
      />
    </svg>
  );
}

export function LeavesDecoration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...props}>
      <path
        d="M-20 -20 C 50 10 100 50 150 120"
        stroke="#90B876"
        strokeWidth="4"
      />
      {/* Leaf 1 */}
      <path
        d="M20 10 C 60 -10 80 20 40 40 C 20 20 0 10 20 10 Z"
        fill="#90B876"
        opacity="0.8"
      />
      {/* Leaf 2 */}
      <path
        d="M50 40 C 100 30 110 60 70 80 C 50 60 40 50 50 40 Z"
        fill="#90B876"
        opacity="0.7"
      />
      {/* Leaf 3 */}
      <path
        d="M10 60 C 40 80 30 110 -10 90 C -20 70 -10 60 10 60 Z"
        fill="#90B876"
        opacity="0.9"
      />
      {/* Leaf 4 */}
      <path
        d="M70 90 C 110 110 100 140 60 120 C 50 100 60 90 70 90 Z"
        fill="#90B876"
        opacity="0.6"
      />
      {/* Leaf 5 */}
      <path
        d="M110 60 C 150 40 170 70 130 90 C 110 70 100 60 110 60 Z"
        fill="#90B876"
        opacity="0.8"
      />
      {/* Leaf 6 */}
      <path
        d="M120 100 C 160 120 150 150 110 130 C 100 110 110 100 120 100 Z"
        fill="#90B876"
        opacity="0.7"
      />
    </svg>
  );
}

export function VeggieBowlIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" {...props}>
      {/* Bowl */}
      <path d="M 30 90 Q 100 150 170 90 Z" fill="#e6dbcb" />
      <path d="M 30 90 Q 100 110 170 90 Z" fill="#d4c7b5" />

      {/* Leaves / Veggies */}
      <path d="M 40 80 Q 30 40 60 20 Q 80 40 70 80 Z" fill="#90B876" />
      <path d="M 80 90 Q 70 30 110 10 Q 130 30 120 90 Z" fill="#044B34" />
      <path d="M 130 80 Q 150 40 180 30 Q 170 60 150 85 Z" fill="#90B876" />

      {/* Tomatoes */}
      <circle cx="70" cy="80" r="25" fill="#FF6221" />
      <circle cx="140" cy="75" r="20" fill="#FF6221" />

      {/* Celery/Stems */}
      <rect
        x="90"
        y="50"
        width="8"
        height="45"
        fill="#E4F0DA"
        transform="rotate(15 90 50)"
      />
      <rect
        x="110"
        y="60"
        width="8"
        height="35"
        fill="#E4F0DA"
        transform="rotate(-15 110 60)"
      />

      {/* Bowl Front Details / Highlight */}
      <path
        d="M 40 100 Q 100 140 160 100"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function ShopDoorSVGIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 40 L85 40 L85 90 L15 90 Z" fill="currentColor" />
      <path d="M15 40 L15 30 C15 25 20 20 25 20 L75 20 C80 20 85 25 85 30 L85 40" />
      <path d="M10 40 L90 40" strokeWidth="10" />
      {/* Awning stripes */}
      <path d="M25 40 L25 55" />
      <path d="M42 40 L42 55" />
      <path d="M58 40 L58 55" />
      <path d="M75 40 L75 55" />
      <path
        d="M10 40 C10 48 18 48 18 40 M18 40 C18 48 32 48 32 40 M32 40 C32 48 50 48 50 40 M50 40 C50 48 68 48 68 40 M68 40 C68 48 82 48 82 40 M82 40 C82 48 90 48 90 40"
        fill="currentColor"
      />
      <rect x="35" y="60" width="30" height="30" fill="white" stroke="none" />
      {/* Person inside shop */}
      <circle cx="50" cy="70" r="4" stroke="none" fill="currentColor" />
      <path
        d="M 40 85 Q 50 75 60 85"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path d="M35 60 L65 60 L65 90 L35 90 Z" />
    </svg>
  );
}

export function NgoPeopleSVGIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      {/* Hand left */}
      <path d="M15 70 C25 80 40 85 50 85 C60 85 75 80 85 70 C88 67 85 62 82 65 C75 72 60 76 50 76 C40 76 25 72 18 65 C15 62 12 67 15 70 Z" />
      <path d="M10 60 C15 70 30 75 40 75 C43 75 43 70 40 70 C30 70 18 65 15 58 C13 55 8 57 10 60 Z" />
      <path d="M90 60 C85 70 70 75 60 75 C57 75 57 70 60 70 C70 70 82 65 85 58 C87 55 92 57 90 60 Z" />

      {/* People Group */}
      <circle cx="50" cy="25" r="9" />
      <path d="M35 50 C35 35 65 35 65 50 L65 58 L35 58 Z" />

      <circle cx="28" cy="35" r="7" />
      <path d="M18 55 C18 45 38 45 38 55 L38 58 L18 58 Z" />

      <circle cx="72" cy="35" r="7" />
      <path d="M62 55 C62 45 82 45 82 55 L82 58 L62 58 Z" />
    </svg>
  );
}

export function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function AuthBoxIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 250 200" fill="none" {...props}>
      {/* Background leaves */}
      <path d="M 120 80 C 80 40 60 80 100 120" fill="#90B876" />
      <path d="M 130 70 C 110 30 80 50 110 100" fill="#044B34" />
      <path d="M 170 80 C 200 40 220 80 180 120" fill="#90B876" />
      <path d="M 160 70 C 180 30 210 50 180 100" fill="#044B34" />

      {/* Veggies */}
      {/* Big Tomato */}
      <circle cx="150" cy="120" r="25" fill="#d94b28" />
      <path
        d="M 150 105 C 145 100 155 95 150 90"
        stroke="#90B876"
        strokeWidth="3"
      />
      <path d="M 140 100 L 160 100 L 150 110 Z" fill="#90B876" />

      {/* Bread/Buns */}
      <circle cx="180" cy="115" r="20" fill="#e8cfa6" />
      <path
        d="M 175 105 L 185 105"
        stroke="#d4ab71"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 170 115 L 190 115"
        stroke="#d4ab71"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottles */}
      <rect x="105" y="70" width="12" height="20" fill="#E4F0DA" />
      <rect x="100" y="65" width="22" height="8" fill="#044B34" rx="2" />
      <rect x="100" y="90" width="22" height="50" fill="#FF6221" rx="4" />

      <rect x="135" y="90" width="10" height="15" fill="#E4F0DA" />
      <rect x="132" y="85" width="16" height="6" fill="#044B34" rx="2" />
      <rect x="130" y="105" width="16" height="30" fill="#fbbd61" rx="4" />

      {/* Box Back */}
      <path d="M 60 130 L 220 130 L 210 180 L 70 180 Z" fill="#d49c63" />
      {/* Box Flaps */}
      <path d="M 60 130 L 40 140 L 70 180 L 70 130 Z" fill="#e6b17a" />
      <path d="M 220 130 L 240 140 L 210 180 L 210 130 Z" fill="#c38851" />
      {/* Box Front */}
      <path d="M 70 135 L 210 135 L 210 185 L 70 185 Z" fill="#e6b17a" />

      {/* Box Logo ResQMeal mock */}
      <text
        x="140"
        y="165"
        fontFamily="serif"
        fontSize="20"
        fontWeight="bold"
        fill="#044B34"
        textAnchor="middle"
      >
        Res<tspan fill="#FF6221">Q</tspan>Meal
      </text>

      {/* Small floating leaves */}
      <path
        d="M 30 160 C 20 150 10 160 20 170 C 30 180 40 170 30 160 Z"
        fill="#90B876"
      />
      <path
        d="M 240 170 C 250 160 260 170 250 180 C 240 190 230 180 240 170 Z"
        fill="#90B876"
      />
    </svg>
  );
}

export function BirdsDecoration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 150 100"
      fill="none"
      stroke="#90B876"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 30 Q 20 20 30 30 Q 40 20 50 30" opacity="0.6" />
      <path d="M60 10 Q 75 0 90 10 Q 105 0 120 10" opacity="0.5" />
      <path d="M40 60 Q 55 50 70 60 Q 85 50 100 60" opacity="0.4" />
      <path d="M110 80 Q 120 70 130 80 Q 140 70 150 80" opacity="0.3" />
    </svg>
  );
}
