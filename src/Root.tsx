<<<<<<< HEAD
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { NaverComp } from "./NaverIntro/NaverComp";

// Each <Composition> is an entry in the sidebar!
=======
import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
>>>>>>> origin/main

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NaverIntro"
<<<<<<< HEAD
        component={NaverComp}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
=======
        component={MyComposition}
        durationInFrames={1200}
        fps={30}
        width={1080}
        height={1920}
>>>>>>> origin/main
      />
    </>
  );
};
