import { Swiper, SwiperSlide } from "swiper/react";
import { TFunction } from "next-i18next";
import MoleculesTagProject from "@Src/components/molecules/tagprojects";

interface IProject {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
  link?: string;
}

type TCarrusel = {
  data?: IProject[];
  t?: TFunction;
};

const ProjectsData: IProject[] = [
  {
    id: "0",
    title: "Landing page for COMFECO",
    type: "Web Landing",
    description: "project-desc-1",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1611712445/StacklyCodeImages/comfeco_yzsm7k.png",
    link: "https://www.comfeco.com/",
  },
  {
    id: "1",
    title: "Landing page for CreaApps",
    type: "Web | UI/UX",
    description: "project-desc-2",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604710707/StacklyCodeImages/project2_stlr9u.png",
    link: "https://creaapps.com.do/",
  },
  {
    id: "2",
    title: "Control Vehicular del Estado de Oaxaca",
    type: "Web | CRM/Dashboard",
    description: "project-desc-3",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604981586/StacklyCodeImages/Project7_jyrxur.png",
    link: "http://fgeo-control-vehicular.herokuapp.com/",
  },
  {
    id: "3",
    title: "Gaceta Ucayalina",
    type: "Web News Site",
    description: "project-desc-4",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604710669/StacklyCodeImages/project1_b4wzaz.png",
    link: "https://www.gacetaucayalina.com/",
  },
  {
    id: "4",
    title: "Landing page for Fazt Community",
    type: "Web | UI/UX",
    description: "project-desc-5",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1611715008/StacklyCodeImages/faztc_armkzj.png",
    link: "https://faztcommunity.dev/",
  },
  {
    id: "5",
    title: "Design MoveTv",
    type: "Design | Redesign Web",
    description: "project-desc-6",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1611715275/StacklyCodeImages/movetv_fd1xbv.png",
    link:
      "https://www.figma.com/file/ALiyl4IfPtj9gRu15gfhqm/Untitled?node-id=0%3A1",
  },
  {
    id: "6",
    title: "Design App Hotel",
    type: "Design | Redesign Web",
    description: "project-desc-7",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1611715791/StacklyCodeImages/app_hotel_design_uuyuoi.png",
    link:
      "https://www.figma.com/file/IHaZUiMzMDtz0yTsCZWKaQGx/Untitled?node-id=92%3A2",
  },
];

const MoleculeCarrusel: React.FC<TCarrusel> = ({ data, t }) => {
  return (
    <Swiper
      slidesPerView={4}
      pagination={{ clickable: true }}
      loop
      autoplay={{
        delay: 500,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {(data &&
        data?.map((item) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MoleculesTagProject
              t={t}
              key={item.id}
              title={item.title}
              img={item.urlImage}
              description={item.description}
              type={item.type}
              link={item.link}
            />
          </SwiperSlide>
        ))) ||
        ProjectsData.map((item) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MoleculesTagProject
              t={t}
              key={item.id}
              title={item.title}
              img={item.urlImage}
              description={item.description}
              type={item.type}
              link={item.link}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MoleculeCarrusel;
