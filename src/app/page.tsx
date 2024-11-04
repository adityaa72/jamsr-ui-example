import { Button, Input } from "@jamsr-ui/react";
import { UIStylesProvider } from "@jamsr-ui/styles";

const Home = () => {
  return (
    <UIStylesProvider input={{ className: "bg-red-500" }}>
      <div className="flex flex-col gap-4 items-start">
        <Button>This is a button</Button>
        <Input label="Username" variant="outlined" />
      </div>
    </UIStylesProvider>
  );
};

export default Home;
