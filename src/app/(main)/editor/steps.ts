import { EditorFormProps } from "@/lib/types";
import EducationForm from "./forms/EducationForm";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  {
    title: "Ерөнхий мэдээлэл",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    title: "Хувийн мэдээлэл",
    component: PersonalInfoForm,
    key: "personal-info",
  },
  {
    title: "Ажлын туршлага",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Боловсрол",
    component: EducationForm,
    key: "education",
  },
  {
    title: "Ур чадвар",
    component: SkillsForm,
    key: "skill",
  },
  {
    title: "Товч танилцуулга",
    component: SummaryForm,
    key: "summary",
  },
];
