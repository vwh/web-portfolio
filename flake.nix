{
  description = "Bun Javascript App";

  inputs = {
    utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      utils,
    }:

    utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShell = pkgs.mkShell {
          name = "deno-app";
          buildInputs = with pkgs; [
            deno
          ];

          shellHook = ''
            if [ ! -d src ]; then
              deno run -A https://lume.land/init.ts src
            fi

            cd src

            echo "deno tasks:"
            echo "deno task lume"
            echo "deno task build"
            echo "deno task serve"
          '';
        };
      }
    );
}