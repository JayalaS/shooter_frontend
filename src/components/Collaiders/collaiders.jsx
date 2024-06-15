import { useBox, useCylinder, useSphere } from "@react-three/cannon";

export const BoxCollaider = (props) => {
  const [BoxCollaider, BoxCollaiderAPI] = useBox(() => ({
    args: props.args,
    position: props.position,
    rotation: props.rotation,
    mass: props.mass,
    type: props.type,
    onCollide: (e) => {
      //   console.log("collided");
      props.onCollide(e);
    },
  }));
  return <group ref={BoxCollaider}>{props.children}</group>;
};

export const SphereCollaider = (props) => {
  const [SphereCollaider, SphereCollaiderAPI] = useSphere(() => ({
    args: props.args,
    position: props.position,
    rotation: props.rotation,
    mass: props.mass,
    type: props.type,
    onCollide: (e) => {
      //   console.log("collided");
      //   props.onCollide(e);
    },
  }));
  return <group ref={SphereCollaider}>{props.children}</group>;
};

export const CylinderCollaider = (props) => {
  const [CilinderCollaider, CilinderCollaiderAPI] = useCylinder(() => ({
    args: props.args,
    position: props.position,
    rotation: props.rotation,
    mass: props.mass,
    type: props.type,
    onCollide: (e) => {
      //  console.log("collided");
      props.onCollide(e);
    },
  }));
  return (
    <group dispose={null}>
      <mesh ref={CilinderCollaider}>{props.children}</mesh>
    </group>
  );
};

export const useSphereCollaider = (props) => {
  const [sphereCollaider, sphereCollaiderAPI] = useSphere(() => ({
    args: props.args,
    position: props.position,
    rotation: props.rotation,
    mass: props.mass,
    type: props.type,
    scale: props.scale,
  }));

  return {
    sphereCollaider,
    sphereCollaiderAPI,
  };
};

export const useBoxCollaider = (props) => {
  const [boxCollaider, boxCollaiderAPI] = useBox(() => ({
    args: props.args,
    position: props.position,
    rotation: props.rotation,
    mass: props.mass,
    type: props.type,
  }));

  return {
    boxCollaider,
    boxCollaiderAPI,
  };
};
