import { Button, Input } from "@jamsr-ui/react";
import { UIStylesProvider } from "@jamsr-ui/styles";

const Home = () => {
  return (
    <UIStylesProvider
      input={{
        classNames: {
          inputWrapper: "group-data-[focused=true]:border-white",
        },
      }}
    >
      <div className="flex flex-col gap-4 items-start">
        <Button>This is a button</Button>
        <Input label="Username" variant="outlined" />
      </div>
    </UIStylesProvider>
  );
};

export default Home;
