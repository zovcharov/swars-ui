import { withAppLayout } from "@/features/AppLayout";
import PeopleList from "@/features/PeopleList";
import { NextPageWithLayout } from "@/types/common.types";

const PeoplePage: NextPageWithLayout = () => {

  return (
    <>
      <PeopleList />
    </>
  )
}

export default withAppLayout(PeoplePage);