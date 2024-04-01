import React from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from "react-crud-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// Component's Base CSS
import "./post.css";

const DescriptionRenderer = ({ field }) => <textarea {...field} />;
// const RequirementRenderer = ({ field }) => <textarea {...field} />;

let posts = [
  {
    id: "1",
    title: "Software Engineer",
    post: "Remote",
    description: "Developing software applications for various platforms",
    requirements: [
      "Experience with JavaScript, HTML, CSS",
      "Strong problem-solving skills",
    ],
    deadline: "2024-04-30",
  },
  {
    id: "2",
    title: "Marketing Manager",
    post: "New York City",
    description: "Creating and implementing marketing strategies",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "Experience in digital marketing",
    ],
    deadline: "2024-05-05",
  },
  {
    id: "3",
    title: "Graphic Designer",
    post: "Los Angeles",
    description: "Designing visual content for print and digital media",
    requirements: ["Bachelor's degree in Graphic Design or related field"],
    deadline: "2024-04-25",
  },
  {
    id: "4",
    title: "Data Analyst",
    post: "Chicago",
    description:
      "Analyzing data to provide insights and support decision-making",
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, or related field",
    ],
    deadline: "2024-05-01",
  },
  {
    id: "5",
    title: "Customer Service Representative",
    post: "Miami",
    description: "Assisting customers with inquiries, concerns, and requests",
    requirements: ["High school diploma or equivalent"],
    deadline: "2024-04-28",
  },
  {
    id: "6",
    title: "Accountant",
    post: "San Francisco",
    description: "Managing financial records and preparing reports",
    requirements: ["CPA certification preferred"],
    deadline: "2024-05-10",
  },
  {
    id: "7",
    title: "Human Resources Manager",
    post: "Washington, D.C.",
    description: "Overseeing recruitment, training, and employee relations",
    requirements: ["SHRM certification preferred"],
    deadline: "2024-05-02",
  },
  {
    id: "8",
    title: "Sales Representative",
    post: "Dallas",
    description: "Generating leads and closing sales deals",
    requirements: ["Proven sales experience"],
    deadline: "2024-04-27",
  },
  {
    id: "9",
    title: "Web Developer",
    post: "Seattle",
    description: "Building and maintaining websites and web applications",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in HTML, CSS, JavaScript",
    ],
    deadline: "2024-05-03",
  },
  {
    id: "10",
    title: "Content Writer",
    post: "Boston",
    description:
      "Creating engaging content for websites, blogs, and social media",
    requirements: [
      "Bachelor's degree in English, Journalism, or related field",
      "Excellent writing and editing skills",
      "Experience with SEO and content marketing",
    ],
    deadline: "2024-04-29",
  },
  // Add more job objects as needed
];

// console.log(posts);

const SORTERS = {
  NUMBER_ASCENDING: (mapper) => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: (mapper) => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: (mapper) => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: (mapper) => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
  const mapper = (x) => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let count = posts.length;
const service = {
  fetchItems: (payload) => {
    let result = Array.from(posts);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: (post) => {
    count += 1;
    posts.push({
      ...post,
      id: count,
    });
    return Promise.resolve(post);
  },
  update: (data) => {
    const post = posts.find((t) => t.id === data.id);
    post.post = data.post;
    post.description = data.description;
    return Promise.resolve(post);
  },
  delete: (data) => {
    const post = posts.find((t) => t.id === data.id);
    posts = posts.filter((t) => t.id !== post.id);
    return Promise.resolve(post);
  },
};

const styles = {
  container: { margin: "auto", width: "fit-content" },
};

export default function Example() {
  return (
    <div className="content">
      <CRUDTable
        // caption="posts"
        fetchItems={(payload) => service.fetchItems(payload)}
      >
        <Fields>
          <Field className="col-1" name="id" label="Id" hideInCreateForm />
          <Field name="title" label="Title" placeholder="Title" />

          <Field
            name="description"
            label="Description"
            render={DescriptionRenderer}
          />
          {/* <Field
            className="col-1"
            name="requirements"
            label="Requirements"
            render={({ value }) => (
              // console.log("test"+value),
              <ul>
                {value?.map(
                  (requirement, index) => (
                    console.log("test2" + requirement),
                    (<li key={index}>{requirement}</li>)
                  )
                )}
              </ul>
            )}
          /> */}
          {/* <Field
            name="requirements"
            label="Requirements"
            render={({ value }) => (
              <div>
                {value?.map((requirement, index) => (
                  <div key={index}>{requirement}</div>
                ))}
              </div>
            )}
          /> */}
          {/* <Field
            name="requirements"
            label="Requirements"
           
          /> */}

          <Field name="deadline" label="Deadline" placeholder="deadline" />
        </Fields>
        <CreateForm
        // className="position-relative position-absolute top-0 end-0"
          title="Post Creation"
          message="Create a new Post!"
          trigger="Create Job Post"
          onSubmit={(post) => service.create(post)}
          submitText="Create"
          validate={(values) => {
            const errors = {};
            if (!values.post) {
              errors.post = "Please provide post's title";
            }

            if (!values.description) {
              errors.description = "Please provide post's description";
            }

            return errors;
          }}
        />

        <UpdateForm
          title="Post Update Process"
          message="Update Post"
          trigger={<FontAwesomeIcon icon={faUserEdit} />}
          onSubmit={(post) => service.update(post)}
          submitText="Update"
          validate={(values) => {
            const errors = {};

            if (!values.post) {
              errors.post = "Please provide post's title";
            }

            if (!values.description) {
              errors.description = "Please provide post's description";
            }

            return errors;
          }}
        />

        {/* <UpdateForm
          title="Post Update Process"
          message="Update Post"
          onSubmit={(post) => service.update(post)}
          submitText={<FontAwesomeIcon icon={faUserAlt} />} // Use FontAwesomeIcon instead of plain text
          validate={(values) => {
            const errors = {};

            if (!values.post) {
              errors.post = "Please provide post's title";
            }

            if (!values.description) {
              errors.description = "Please provide post's description";
            }

            return errors;
          }}
        /> */}
        {/* <UpdateForm
          title="Post Update Process"
          message="Update Post"
          onSubmit={(post) => service.update(post)}
          submitText={<FontAwesomeIcon icon={faUserAlt} />}
          validate={(values) => {
            const errors = {};

            if (!values.post) {
              errors.post = "Please provide post's title";
            }

            if (!values.description) {
              errors.description = "Please provide post's description";
            }

            return errors;
          }}
        /> */}
        <DeleteForm
          title="post Delete Process"
          message="Are you sure you want to delete the post?"
          trigger={<FontAwesomeIcon icon={faTrashCan} />}
          onSubmit={(post) => service.delete(post)}
          submitText="Delete"
          validate={(values) => {
            const errors = {};
            if (!values.id) {
              errors.id = "Please provide id";
            }
            return errors;
          }}
        />
      </CRUDTable>
    </div>
  );
}
