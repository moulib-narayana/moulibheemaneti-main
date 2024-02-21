export default defineEventHandler(event => {
  // console.log("event : ", event)
  // console.log("event res: ", event.node.res)
  const url = event.node.req.url;
  const year = 31536000; //  1 year in seconds
  const hour = 60 * 60; //  1 hour in seconds
  const res = event.node.res;
  // console.log("url: ", url)
  if (url !== undefined && (url.match(/(.+)\.(jpg|jpeg|gif|css|png|js|ico|svg|mjs|ico)/) || url.match(/_ipx\/(.+)\.(jpg|jpeg|gif|css|png|js|ico|svg|mjs|ico)/))) {
    // console.log("setting max age",)
    res.setHeader('Cache-Control', `max-age=${year} s-maxage=${year}`);
  }
})
