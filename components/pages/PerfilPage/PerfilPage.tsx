import cn from "classnames";
//  Components
import AccountCard from "./components/AccountCard";
import CompanyInfo from "./components/CompanyInfo";
import StatisticsCard from "./components/StatisticsCard";
//  Utils
import institutions from "@/json/cursos.json";
//  Types
import { useUserData } from "@/lib/hooks/use-user-data";

const PerfilPage = () => {
  const { studentData } = useUserData({ fetchStudent: true });

  if (!studentData || !institutions) return null;

  const values = {
    age: studentData.age,
    name: studentData.name,
    course: studentData.course,
    university: studentData.university,
  };

  return (
    <main className="w-full h-full flex flex-col items-start">
      <h1 className="font-medium text-4xl border-t-4 border-primary-500 my-10 text-tertiary-500">
        O meu <span className="text-primary-500">Perfil</span>
      </h1>
      <div className={cn("grid grid-cols-12 gap-5 w-full")}>
        <div
          className={cn(
            "col-span-12 w-full",
            "md:col-span-12",
            "lg:col-span-3",
            "xl:col-span-3"
          )}
        >
          <StatisticsCard
            name={studentData.name || "undefined"}
            points={studentData.points || 0}
            scans={studentData.scans || 0}
            image={studentData.image}
          />
        </div>
        <div
          className={cn(
            "col-span-12",
            "md:col-span-12",
            "lg:col-span-9",
            "xl:col-span-9"
          )}
        >
          <AccountCard
            id={studentData.id}
            values={values}
            cv={studentData.cv?.cvLocation}
            institutions={institutions}
          />
        </div>
      </div>
      <h2 className="font-medium text-4xl border-t-4 border-primary-500 my-10 text-tertiary-500">
        Bancas <span className="text-primary-500">visitadas</span>
      </h2>
      {studentData.companies && studentData.companies.length > 0 ? (
        /* <Carousel
          dots
          dotsActiveColor="bg-primary-500"
          dotsInactiveColor="bg-primary-100"
          wrapperclassName="!bg-white mb-5"
        >
          {studentData.companies.map((company) => (
            <CompanyInfo key={company.user.id} {...company} />
          ))}
        </Carousel> */
        <p>Caroussel</p>
      ) : (
        <p>Ainda não visitaste nenhuma banca.</p>
      )}
    </main>
  );
};

export default PerfilPage;
