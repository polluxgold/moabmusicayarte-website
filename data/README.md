# data/

Reserved for structured content data (e.g. team.json, events.json, programs.json).

The site is currently built as static HTML with content written directly into each
page. If the site grows and you want to manage content separately from markup —
for example, updating the team roster or event listings without touching HTML —
this folder is where that structured data would live, paired with a small script
to render it into the pages (note: a local build/dev server would be needed, since
browsers block fetch() of local files opened directly via file://).
