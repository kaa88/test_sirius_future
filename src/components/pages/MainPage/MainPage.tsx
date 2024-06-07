import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./MainPage.module.scss";

import logo from "./../../../assets/img/logo.svg";

interface MainPageProps extends ComponentPropsWithoutRef<"div"> {}

export const MainPage = ({
  className,
  children,
  ...props
}: MainPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      Main page
      {/* <img src={logo} alt="logo" style={{ width: "1000px" }} /> */}
      <p>{text}</p>
      <p>{text}</p>
    </div>
  );
};

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quis voluptate exercitationem, ipsum est dolorem impedit animi veritatis culpa. Sint soluta delectus odio consequatur suscipit praesentium enim a laudantium doloremque necessitatibus tempora iusto aut modi, commodi fuga natus amet est aliquid? Eligendi laborum voluptate iste ullam error asperiores sint nulla porro cupiditate cum commodi veniam dicta ea minus quasi blanditiis vitae quas, labore debitis eaque necessitatibus? Optio amet alias ab dicta, quae animi nisi, quaerat mollitia ducimus maxime, laudantium dolor quod itaque! Nesciunt placeat provident ad corrupti similique repellendus debitis repudiandae quo rem possimus voluptatum cupiditate quibusdam consequuntur, cumque reiciendis saepe nisi, laudantium praesentium sunt? Vitae recusandae temporibus aperiam tenetur magni quam odio quasi consequuntur dolores doloribus. Sapiente exercitationem excepturi alias sunt dignissimos itaque accusantium, nam veritatis praesentium delectus ex expedita ipsam placeat. Quo ea ratione nisi? Id quos nemo reiciendis, eius exercitationem tempora necessitatibus sint quo delectus eaque enim, quod perferendis quae aperiam. Minima laudantium quam neque, incidunt possimus voluptatibus laborum modi aliquid? Cumque sequi ducimus dolores. Provident, similique mollitia cupiditate excepturi nam eveniet neque hic saepe alias facilis aliquam. Ut officia quisquam amet est perspiciatis saepe consectetur expedita, praesentium quod corrupti ratione cum rerum rem fuga quis voluptatibus eveniet fugit accusantium dolorem repellendus omnis. Ducimus quasi eaque laborum sit aspernatur explicabo, possimus culpa! Totam excepturi alias, eaque, doloremque ad reiciendis dolorem tenetur molestias voluptates autem nemo libero? Ratione aut impedit praesentium nisi dolorem repudiandae dolores quod assumenda. Adipisci officia recusandae ullam officiis accusamus enim repellendus voluptatem modi odit, magnam, hic fugiat dolore aspernatur eos ipsum animi explicabo molestias illum illo? Atque, perspiciatis unde. Minima saepe, aliquid voluptatem exercitationem vel vitae molestias incidunt blanditiis eos sint eum, omnis, praesentium adipisci quaerat qui pariatur excepturi alias corrupti. Porro, vero iure. A ad dolor dicta, at voluptate nesciunt blanditiis aliquid temporibus aperiam modi molestias provident eius veritatis laborum enim repudiandae vel! Explicabo alias veritatis ullam tempora reprehenderit, fugiat itaque eius quae labore qui doloremque distinctio voluptatum fugit reiciendis id est at. Maiores atque rerum necessitatibus. Alias, iure facilis itaque accusantium, quos corrupti saepe sapiente quia aliquam, soluta odit! Quis rerum in soluta natus esse optio eveniet, animi mollitia! Quia delectus quam cum corrupti tenetur temporibus perspiciatis praesentium aut maxime voluptatem ut non consequuntur reprehenderit laudantium inventore ipsam, enim quaerat totam voluptatibus deleniti veniam est? Eos commodi quia dolores, quasi quaerat dignissimos illo illum unde, reprehenderit eum nihil quibusdam praesentium recusandae corrupti temporibus obcaecati sed facere, at accusantium? Non eum blanditiis expedita cumque, eos porro soluta veritatis quos, iste iusto est magnam omnis cupiditate? Cum quasi velit atque tempora impedit nobis? Incidunt reiciendis blanditiis minus omnis id aspernatur iure, excepturi eligendi natus, autem dicta? Similique eos libero dolorum voluptatum labore perferendis vitae, dolores fuga placeat facilis sapiente repudiandae architecto fugit laboriosam pariatur nemo totam iure corrupti debitis necessitatibus cupiditate dicta laudantium omnis maxime? Labore odit ullam doloremque repellendus quaerat iusto praesentium aut! Esse dolorum neque saepe rerum eius, explicabo atque dolorem molestiae quod voluptates corporis at porro soluta doloremque vitae repudiandae eveniet!";
