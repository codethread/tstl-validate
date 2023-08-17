local ____lualib = require("lualib_bundle")
local __TS__AsyncAwaiter = ____lualib.__TS__AsyncAwaiter
local __TS__Await = ____lualib.__TS__Await
local ____exports = {}
local ____index = require("utils.index")
local getIssue = ____index.getIssue
--- Creates an async void schema.
-- 
-- @param error The error message.
-- @returns An async void schema.
function ____exports.voidTypeAsync(____error)
    return {
        schema = "void",
        async = true,
        _parse = function(self, input, info)
            return __TS__AsyncAwaiter(function(____awaiter_resolve)
                if type(input) ~= "nil" then
                    return ____awaiter_resolve(
                        nil,
                        {issues = {getIssue(info, {reason = "type", validation = "void", message = ____error or "Invalid type", input = input})}}
                    )
                end
                return ____awaiter_resolve(nil, {output = input})
            end)
        end
    }
end
return ____exports
