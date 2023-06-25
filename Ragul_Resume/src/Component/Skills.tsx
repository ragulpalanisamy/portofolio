import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../style/index.css";

export default function Skills() {
  return (
    <section id="skills" className="skills my-10 container">
      <h2 className="skill">Skills</h2>
      <div className="front">
        <h3>Front-End Languages: </h3>
        <div className="flex justify-evenly">
          <Card sx={{ maxWidth: 345 }} className="mt-10 shadow-md">
            <CardMedia
              component="img"
              alt="HTML CSS JS"
              image="https://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png"
              height="300px"
              className="p-2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                HTML CSS JAVASCRIPT
              </Typography>
              <Typography variant="body2" className="text-secondary">
                I have learned HTML, CSS, and JavaScript through Udemy and
                FreeCodeCamp. These skills enable me to create dynamic and
                responsive web applications.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="#">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="mt-10">
            <CardMedia
              component="img"
              alt="REACT JS"
              className="p-2"
              image="https://cdn-images-1.medium.com/max/4000/1*6kX5D75l04BSZ6llEd9qWQ.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                REACT JS (Tailwind CSS/ Bootstrap)
              </Typography>
              <Typography variant="body2" className="text-secondary">
                Proficient in ReactJS, Tailwind CSS, and Bootstrap. Skilled in
                developing responsive web applications with clean code,
                intuitive user interfaces, and optimal performance.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="#">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="back">
        <h3>Back-End Languages: </h3>
        <div className="flex justify-evenly">
          <Card sx={{ maxWidth: 345 }} className="mt-10">
            <CardMedia
              component="img"
              alt="JS"
              image="https://learncybers.com/wp-content/uploads/2019/06/express-js.jpg"
              height="auto"
              className="p-2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                JAVASCRIPT
              </Typography>
              <Typography variant="body2" className="text-secondary">
                Proficient in back-end JavaScript development with expertise in
                Node.js, Express.js, and MongoDB. Experienced in building robust
                and scalable server-side applications and RESTful APIs. Strong
                knowledge of database management and data manipulation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="#">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="db">
        <h3>Database: </h3>
        <div className="flex justify-evenly">
          <Card sx={{ maxWidth: 345 }} className="mt-10">
            <CardMedia
              component="img"
              alt="POSTGRESQL"
              image="https://img.freepik.com/premium-vector/gradient-sql-illustration_52683-80408.jpg"
              height="300px"
              width="200px"
              className="p-2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <abbr title="Structured Query Language">SQL</abbr>
              </Typography>
              <Typography variant="body2" className="text-secondary">
                Learned SQL database management, including querying, creating,
                and modifying databases, tables, and records. Proficient in SQL
                syntax and data manipulation operations for efficient data
                retrieval and management.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="#">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="mt-10">
            <CardMedia
              component="img"
              alt="POSTGRESQL"
              image="https://webapp.io/blog/content/images/2019/11/postgres.png"
              height="300px"
              width="200px"
              className="p-2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <abbr title="Postgre Structured Query Language">
                  PostgreSQL
                </abbr>
              </Typography>
              <Typography variant="body2" className="text-secondary">
                I have learned PostgreSQL database management system, including
                data modeling, querying, and administration, enabling efficient
                and reliable storage and retrieval of structured data.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="#">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </section>
  );
}
