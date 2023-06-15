import { Html } from "@react-three/drei"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "tailwind.config"
import { useMediaQuery } from "@react-hook/media-query"
const fullConfig = resolveConfig(tailwindConfig)


export const ExperienceText = function () {
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const maxWidth = isDesktop ? fullConfig.theme.screens.xl : '100%'
  return (
    <Html position={[0, 14, 1]} wrapperClass="w-full" style={{ pointerEvents: "none" }}>
      <div

        className="text-white text-opacity-90 text-4xl  translate-x-[calc(-100%/2)] sm:text-6xl  max-w-screen-xl mx-auto"
      >
        <div className="px-6">
          <span
            style={{
              position: 'relative',
              display: 'inline',
            }}
          >
            <Highlight />
            {"CollectivSea"}
          </span>
          {" is an art collective creating a  playborhood for blue-minded artists, scientists, researchers & designers to share the story of our undiscovered blue planet."}

        </div>
      </div>
    </Html>
  )
}


const Highlight = function () {
  return (
    <span
      style={{
        position: 'absolute',
        zIndex: -1,
        backgroundColor: '#facc15',
        opacity: 0.9,
        height: '106%', // Increase the height by 10%
        width: '106%', // Increase the width by 10%
        left: '-3%', // Offset the increased width by -5% (half of the width increase)
        top: '-3%', // Offset the increased height by -5% (half of the height increase)

        transform: 'rotate(-2deg)',
      }}
    ></span>
  )
}