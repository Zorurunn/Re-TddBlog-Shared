import { Container } from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Container>
        <div className="w-full flex justify-center items-center">
          <div className="w-[70%]">
            <div className="flex gap-[40px]">
              <div className="text-[120px]">404</div>
              <hr className="border-[2px]" />
              <div className="flex flex-col justify-between">
                <div>Page not Found</div>
                <div>
                  We are sorry, This page is unknown or does not exist the page
                  you are looking for. You can change the world.
                </div>
                <Link href={"/#"}>
                  <div className="bg-sky-400 rounded text-[white] w-fit p-[10px]">
                    Back to Home
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
