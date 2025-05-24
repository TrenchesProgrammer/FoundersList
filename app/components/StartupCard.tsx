import { Box, Text, Flex } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import Link from "next/link";
import formatDate from "../FormatDate";
import '../globals.css'
const StartupCard = ({ post }: { post: startuptypecard }) => {
  return (
    <Box
      className="startup-card"
    >
      <Flex justify={"space-between"} align="center" gap="md">
        <Text>{formatDate(post.createdAt)}</Text>
        <Flex gap={4} justify="center">
          <IconEye color="blue" stroke={2} />
          <Text>{post.views}</Text>
        </Flex>
      </Flex>
      <Flex align={'center'} justify={'space-between'} >
        <Text>{post.author.name}</Text>
        <img style={{borderRadius:'50%'}} src="https://placehold.co/32x32" alt="" />
      </Flex>
      <Text fw={"bolder"}>{post.title}</Text>
      <Text>{post.description}</Text>
      <img width={"100%"} style={{ borderRadius: "10px" }} src={post.image} alt="" />
      <Flex justify={'space-between'} align={'center'}>
        <Link href="">{post.category}</Link>
        <Link
          style={{
            padding: "5px 15px 5px 15px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
          }}
          href=""
        >
          Details
        </Link>
      </Flex>
    </Box>
  );
};

export default StartupCard;
