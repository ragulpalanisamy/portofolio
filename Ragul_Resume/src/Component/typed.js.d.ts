declare module "typed.js" {
  class Typed {
    constructor(element: string | Element, options: TypedOptions);
    destroy(): void;
  }

  interface TypedOptions {
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    backDelay: number;
    loop: boolean;
  }

  export default Typed;
}
