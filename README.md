# Fortles
Fortles is a light weight fully fetched extendable MVC framework written in Typescript.
It is positioned between the classic framerowks, and the modern ractive ones. All basic feature, routing must work without javascript, But with modern (released in the last 5 years) browsers partial page loads works as well.

## State
Fortles in heavy development. Do not use in production!

## History
The first version of Fortles was called "bfw" (bad fun framework) and was written in PHP. It was a small website where you could collect points from friends for sharing bad jokes. As the framework became more serious, its name was changed to "Essentials." The PHP version evolved a lot after a product loading software agreement for webshops. After that, there was a need for a check-in desktop software for hospitals, which couldn't be done with PHP. So, the first NodeJS version was born. The software, using Electron and a SQLite database, was fast, actually too fast. A small delay in loading was added because it was frustrating and seemed like it wasn't working. But it soon hit its limits without strong types, making it incapable of bigger projects. The next version was written in Java for my thesis. It used Hibernate for the model layer and had its own template engine. I focused on making the templates editable later. At the time, GraalVM was released with the hope of creating native images, which is why I chose Java this time. However, at the time of writing, creating native images still had too many gotchas. This version was never used in production, only for a short tech demo to demonstrate that a well-configured Java engine could be faster for concurrent loads than a NodeJS server. The Java version was now lifted to TypeScript as a base, with surprisingly little work. This version hopefully solves the scalability problem with classes and strong types, and with Progressive Web Apps becoming more accepted.
