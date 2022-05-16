import Blocks from 'editorjs-blocks-react-renderer';

const BlogDetail = (props) => {
  const { data, error } = props;

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h1>{data.title}</h1>

      <div style={{ marginBottom: '3rem' }}>{data.description}</div>

      <div style={{ width: '80%', margin: '0 auto' }}>
        <Blocks
          data={data.editorJs}
          config={{
            image: {
              className: 'full-w',
              actionsClassNames: {
                stretched: 'image-block--stretched',
                withBorder: 'image-block--with-border',
                withBackground: 'image-block--with-background',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getServerSideProps({ query }) {
  const { slug } = query;

  //make an ajax call to get your blog

  return {
    props: {
      data: {
        //return your blog data saved through editor.js
        editorJs: {
          time: new Date().getTime(),
          blocks: [
            {
              id: '8FQQLWiDja',
              type: 'paragraph',
              data: { text: 'Start writing here !!!' },
            },
            {
              id: 'z_de1XrMMh',
              type: 'image',
              data: {
                file: {
                  url: 'https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg',
                },
                caption: 'asdasd',
                withBorder: false,
                stretched: false,
                withBackground: false,
              },
            },
          ],
          version: '2.24.3',
        },
      },
    },
  };
}
