import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { ToastContainer, toast } from "react-toastify";

import { getSpotifyRecommendations } from "service/api";

import { Img, Line, List, SelectBox, Text } from "components";

import "react-toastify/dist/ReactToastify.css";

const durationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WhimsicalPage = () => {
  const [recommendationsData, setRecommendationsData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};

    getSpotifyRecommendations(req)
      .then((res) => {
        setRecommendationsData(res?.data);

        toast.success("Load done");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Load failed");
      });
  }

  return (
    <>
      <div className="bg-white-A700 font-gilroy h-[1080px] mx-auto relative w-full">
        <div className="bg-gradient  h-[1090px] m-auto w-full"></div>
        <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly mx-auto w-full">
          <Sidebar className="!sticky !w-[98px] bg-gradient1  flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="flex flex-col items-center justify-start mt-[99px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-full"
                    src="images/img_grinningface.png"
                    alt="grinningface"
                  />
                </div>
              </div>
              <div className="backdrop-opacity-[0.5] bg-deep_orange-300 blur-[9.00px] h-1.5 mt-1 rounded-[5px] w-[32%]"></div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-3.5 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_smilingfacewith.png"
                  alt="smilingfacewith"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_facesavoringfood.png"
                  alt="facesavoringfoo"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_sleepingface.png"
                  alt="sleepingface"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_starstruck.png"
                  alt="starstruck"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_pensiveface.png"
                  alt="pensiveface"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_faceblowingakiss.png"
                  alt="faceblowingakis"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_huggingface.png"
                  alt="huggingface"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_loudlycryingface.png"
                  alt="loudlycryingfac"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_womandancinglight.png"
                  alt="womandancinglig"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_zanyface.png"
                  alt="zanyface"
                />
              </div>
            </div>
            <Line className="bg-deep_orange-200 h-px mt-6 mx-auto w-[30%]" />
            <div className="flex flex-col items-center justify-start mb-[103px] mt-[23px] mx-auto w-[33%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-full"
                  src="images/img_poutingface.png"
                  alt="poutingface"
                />
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col md:gap-10 gap-[77px] items-center justify-start md:mt-0 mt-[49px] md:px-5 w-full">
            <div className="flex flex-col gap-[29px] items-start justify-start w-[92%] md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-purple-400"
                size="txtGilroyBold30"
              >
                Mood Wise Tracks
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row gap-[31px] items-center justify-between w-[47%] md:w-full">
                  <Img
                    className="h-[184px] md:h-auto object-cover rounded-md w-[184px]"
                    src="images/img_rectangle21.png"
                    alt="rectangleTwentyOne"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start">
                    <Text
                      className="leading-[39.00px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 w-full"
                      size="txtGilroyBold34"
                    >
                      Chaand Baaliyan - Aditya K.
                    </Text>
                    <Text
                      className="text-black-900_87 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Album - Chaand Baaliyan
                    </Text>
                  </div>
                </div>
                <div className="h-[129px] relative w-[129px]">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-[62%]">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-full"
                      src="images/img_grinningface.png"
                      alt="grinningface_One"
                    />
                  </div>
                  <div className="absolute border border-red-200 border-solid h-[129px] inset-[0] justify-center m-auto rounded-[64px] shadow-bs w-[129px]"></div>
                </div>
              </div>
            </div>
            <div className="md:h-[2101px] sm:h-[703px] h-[795px] relative w-full">
              <div className="absolute bg-gradient  h-[702px] inset-x-[0] mx-auto shadow-bs1 top-[0] w-full"></div>
              <div className="absolute flex flex-col gap-[27px] h-max inset-[0] items-start justify-center m-auto w-[93%]">
                <SelectBox
                  className="font-semibold text-lg text-right w-[14%] sm:w-full"
                  placeholderClassName="text-purple-400"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="duration"
                  options={durationOptionsList}
                  isSearchable={false}
                  placeholder="Last 6 Months"
                  shape="round"
                  color="purple_400_19"
                  size="xs"
                  variant="fill"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[19px] w-[89%] md:w-full">
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        No.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[66px] text-black-900_01 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        Song Title
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[282px] text-black-900_01 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        Album Name
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[131px] text-black-900_01 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        Artist
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[289px] text-black-900_01 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        Duration
                      </Text>
                    </div>
                    <Line className="bg-purple-300 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <Text
                        className="text-base text-black-900_01"
                        size="txtGilroyRegular16"
                      >
                        1
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-center md:ml-[0] ml-[77px] w-1/4 md:w-full">
                        <Img
                          className="h-20 md:h-auto object-cover rounded-md w-20"
                          src="images/img_rectangle20.png"
                          alt="rectangleTwenty"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16"
                        >
                          Hum Nashe Mein Toh Nahin
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[73px] text-base text-black-900_02"
                        size="txtGilroyRegular16Black90002"
                      >
                        Bhoolbhulaiya 2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[121px] text-base text-black-900_02"
                        size="txtGilroyRegular16Black90002"
                      >
                        Pritam, Arijit Singh, Tulsi Kumar
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[114px] text-base text-black-900_02"
                        size="txtGilroyRegular16Black90002"
                      >
                        03:28
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[111px] w-6"
                        src="images/img_icmoremenu.svg"
                        alt="icmoremenu"
                      />
                    </div>
                    <List
                      className="flex flex-col gap-[16.5px] items-center pt-[17px] px-[17px] w-full"
                      orientation="vertical"
                    >
                      {recommendationsData?.tracks?.map(
                        (recommendationsElement, index) => {
                          return (
                            <React.Fragment
                              key={`recommendationsElement${index}`}
                            >
                              <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                                <Text
                                  className="text-base text-black-900_01"
                                  size="txtGilroyRegular16"
                                >
                                  2
                                </Text>
                                <div className="flex flex-row gap-3.5 items-center justify-center md:ml-[0] ml-[76px] w-[23%] md:w-full">
                                  <Img
                                    className="h-20 md:h-auto object-cover rounded-md w-20"
                                    alt="rectangleTwenty"
                                    src={recommendationsElement?.href}
                                  />
                                  <Text
                                    className="text-base text-blue_gray-900"
                                    size="txtGilroyMedium16"
                                  >
                                    {recommendationsElement?.name}
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[102px] text-base text-black-900"
                                  size="txtGilroyRegular16Black900"
                                >
                                  Chaand Baaliyan
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[109px] text-base text-black-900"
                                  size="txtGilroyRegular16Black900"
                                >
                                  Aditya A
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[272px] text-base text-black-900"
                                  size="txtGilroyRegular16Black900"
                                >
                                  01:43
                                </Text>
                                <div className="flex flex-col h-6 items-center justify-start md:ml-[0] ml-[110px] w-6">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_icmoremenu_black_900.svg"
                                    alt="icmoremenu"
                                  />
                                </div>
                              </div>
                              {index <
                                recommendationsData?.tracks?.length - 1 && (
                                <Line className="self-center h-px bg-purple-100 w-full" />
                              )}
                            </React.Fragment>
                          );
                        },
                      )}
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default WhimsicalPage;
