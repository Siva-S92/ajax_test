import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const ContentCard = ({ contents }) => (
  <>
    <Card
      className="w-full  md:w-[50%] mx-auto"
      hoverable
      cover={<img alt="example" src="/images/job-opening.jpg" />}
    >
      <Meta title="Job Openings" description="contact me on ajaxtech@gmail.com" />
      <p className="my-5 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus
        eligendi reprehenderit pariatur aut ipsa nulla a inventore! Perspiciatis
        qui iusto repellendus nesciunt minus neque numquam quia inventore,
        ratione quisquam?
      </p>
    </Card>

    {contents.length > 0 &&
      contents.map((item, index) => (
        <Card
          key={index}
          className="w-full  md:w-[50%] mx-auto"
          hoverable
          cover={
            <img alt="example" src={`http://localhost:5000/${item.file}`} />
          }
        >
          <Meta
            title={item.title}
            description={`contact me on ${item.email}`}
          />
          <p className="my-5 text-xl">{item.description}</p>
        </Card>
      ))}
  </>
);
export default ContentCard;
