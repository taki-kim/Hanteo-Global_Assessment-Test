export const getCurrentPath = (pathname: string) => {
  const pathArr = pathname.split("/");
  const currentPath = pathArr[pathArr.length - 1];

  if (currentPath) return currentPath;
  else return "차트";
};

export const getTitleString = (urlParams: string | undefined) => {
  switch (urlParams) {
    case "whook":
      return "Whook";
    case "event":
      return "이벤트";
    case "news":
      return "뉴스";
    case "store":
      return "스토어";
    case "charge":
      return "충전소";
    case "dashboard":
      return "게시판";
    case "question":
      return "문의사항";
    default:
      return "차트";
  }
};
