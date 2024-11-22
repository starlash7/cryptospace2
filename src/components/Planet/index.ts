import dynamic from "next/dynamic";

// Planet 컴포넌트를 동적으로 임포트하고 SSR을 비활성화
export const Planet = dynamic(() => import("./Planet"), { ssr: false });
